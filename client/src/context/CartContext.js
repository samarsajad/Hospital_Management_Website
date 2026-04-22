import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const stored = localStorage.getItem('cart');
    return stored ? JSON.parse(stored) : [];
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderInfo, setOrderInfo] = useState(() => {
    const stored = localStorage.getItem('orderInfo');
    return stored ? JSON.parse(stored) : { name: '', email: '', address: '', phone: '' };
  });

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  React.useEffect(() => {
    localStorage.setItem('orderInfo', JSON.stringify(orderInfo));
  }, [orderInfo]);

  const addToCart = (medicine) => {
    setCart((prev) => {
      const exists = prev.find((item) => item._id === medicine._id);
      if (exists) {
        return prev.map((item) =>
          item._id === medicine._id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...medicine, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item._id !== id));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) =>
        item._id === id ? { ...item, qty: Math.max(1, qty) } : item
      )
    );
  };

  const handleOrderInfoChange = (e) => {
    setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value });
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) return resolve(true);
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    // Create order on backend and open Razorpay
    const orderPayload = {
      customerName: orderInfo.name,
      customerEmail: orderInfo.email,
      customerPhone: orderInfo.phone,
      address: orderInfo.address,
      items: cart.map(({ _id, name, price, qty }) => ({ _id, name, price, qty })),
    };
    try {
      const keyRes = await fetch('/api/payments/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderPayload)
      });
      if (!keyRes.ok) {
        return alert('Failed to create payment order. Please try again.');
      }
      const data = await keyRes.json();

      const loaded = await loadRazorpayScript();
      if (!loaded) {
        return alert('Failed to load Razorpay. Check your network.');
      }

      const options = {
        key: data.keyId,
        amount: data.amount,
        currency: data.currency,
        name: 'Mid City Hospital Pharmacy',
        description: 'Medicine Order',
        order_id: data.razorpayOrderId,
        prefill: {
          name: orderInfo.name,
          email: orderInfo.email,
          contact: orderInfo.phone,
        },
        notes: { address: orderInfo.address },
        theme: { color: '#13b33b' },
        handler: async function (response) {
          // Verify payment
          const verifyRes = await fetch('/api/payments/verify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
              orderId: data.orderId,
            })
          });
          if (verifyRes.ok) {
            setOrderPlaced(true);
            setCart([]);
            localStorage.removeItem('cart');
          } else {
            alert('Payment verification failed.');
          }
        },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      alert('Error placing order.');
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, clearCart, orderPlaced, orderInfo, handleOrderInfoChange, handleCheckout, setOrderPlaced }}>
      {children}
    </CartContext.Provider>
  );
}
