
import React, { useState, useMemo } from "react";
import styles from "./PharmacyPage.module.css";
import { useCart } from "../context/CartContext";

function CartPage() {
  const [showCheckout, setShowCheckout] = useState(false);
  const { cart, updateQty, removeFromCart, clearCart, handleCheckout, orderPlaced, orderInfo, handleOrderInfoChange } = useCart();

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.qty, 0), [cart]);
  const taxRate = 0.18; // 18% GST
  const taxAmount = useMemo(() => Math.round(subtotal * taxRate * 100) / 100, [subtotal]);
  const grandTotal = useMemo(() => Math.round((subtotal + taxAmount) * 100) / 100, [subtotal, taxAmount]);

  if (orderPlaced) {
    return (
      <div className={styles.confirmation}>
        <h2>Order Placed Successfully!</h2>
        <p>Thank you for your purchase. Your medicines will be delivered soon.</p>
      </div>
    );
  }

  return (
    <div className={styles.cartSection}>
      <h1 className={styles.cartTitle}>Your Cart</h1>
      {cart.length === 0 ? (
        <p className={styles.emptyCart}>Your cart is empty.</p>
      ) : (
        <div className={styles.cartContent}>
          <div className={styles.cartItemsList}>
            {cart.map((item) => (
              <div className={styles.cartItem} key={item._id}>
                <img src={item.imageUrl} alt={item.name} className={styles.cartItemImage} />
                <div className={styles.cartItemDetails}>
                  <h3 className={styles.cartItemName}>{item.name}</h3>
                  {item.brand && <p className={styles.cartItemBrand}>Brand: {item.brand}</p>}
                  {item.composition && <p className={styles.cartItemComp}>Comp: {item.composition}</p>}
                  <p className={styles.cartItemPrice}>Price: ₹{item.price}</p>
                </div>
                <div className={styles.cartItemActions}>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) => updateQty(item._id, parseInt(e.target.value))}
                    className={styles.qtyInput}
                  />
                  <p className={styles.itemTotal}>₹{item.price * item.qty}</p>
                  <button onClick={() => removeFromCart(item._id)} className={styles.removeBtn}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <aside className={styles.cartSummary}>
            <h2>Order Summary</h2>
            <div className={styles.summaryRow}><span>Subtotal</span><span>₹{subtotal}</span></div>
            <div className={styles.summaryRow}><span>GST (18%)</span><span>₹{taxAmount}</span></div>
            <div className={styles.summaryTotal}><span>Total</span><span>₹{grandTotal}</span></div>
            <div className={styles.summaryActions}>
              <button onClick={() => setShowCheckout(true)} className={styles.checkoutBtn}>Proceed to Pay</button>
              <button onClick={clearCart} className={styles.clearBtn}>Clear Cart</button>
            </div>
          </aside>
        </div>
      )}

      {showCheckout && cart.length > 0 && (
        <div className={styles.checkoutModal}>
          <form className={styles.checkoutForm} onSubmit={handleCheckout}>
            <h2>Checkout</h2>
            <label>Name
              <input type="text" name="name" value={orderInfo.name} onChange={handleOrderInfoChange} required />
            </label>
            <label>Email
              <input type="email" name="email" value={orderInfo.email} onChange={handleOrderInfoChange} required />
            </label>
            <label>Address
              <input type="text" name="address" value={orderInfo.address} onChange={handleOrderInfoChange} required />
            </label>
            <label>Phone
              <input type="text" name="phone" value={orderInfo.phone} onChange={handleOrderInfoChange} required />
            </label>
            <button type="submit" className={styles.placeOrderBtn}>Pay with Razorpay</button>
            <button type="button" className={styles.cancelBtn} onClick={() => setShowCheckout(false)}>Cancel</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default CartPage;
