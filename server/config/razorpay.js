import Razorpay from "razorpay";

const { RAZORPAY_KEY_ID, RAZORPAY_KEY_SECRET } = process.env;

if (!RAZORPAY_KEY_ID || !RAZORPAY_KEY_SECRET) {
  console.warn("[Razorpay] Missing RAZORPAY_KEY_ID or RAZORPAY_KEY_SECRET in environment.");
}

const razorpay = new Razorpay({
  key_id: RAZORPAY_KEY_ID || "",
  key_secret: RAZORPAY_KEY_SECRET || "",
});

export default razorpay;
export const razorpayPublicKey = RAZORPAY_KEY_ID || "";
