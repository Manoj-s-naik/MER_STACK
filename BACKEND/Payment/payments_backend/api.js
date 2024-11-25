
const express = require("express");
const dotenv = require("dotenv");
const Razorpay = require("razorpay");
const ShortUniqueId = require("short-unique-id");
const cors =  require("cors");
const app = express();

dotenv.config();
app.use(cors());
const { PORT, RAZORPAY_PRIVATE_KEY, RAZORPAY_PUBLIC_KEY } = process.env;

const razorpayInstance = new Razorpay({
  key_id: RAZORPAY_PUBLIC_KEY,
  key_secret: RAZORPAY_PRIVATE_KEY,
});

const uid = new ShortUniqueId({ length: 10 });

app.post("/checkout", async (req, res) => {
  try {
    const amount = 100;
    const currency = "INR";
    const receipt = `rp_${uid.rnd()}`;

    const orderConfig = {
      amount: amount * 100,
      currency: currency,
      receipt: receipt,
    };
    const order = await razorpayInstance.orders.create(orderConfig);
    res.status(200).json({
      status: "success",
      order: order,
    });
  } catch (err) {
    return res.status(500).json({
      status: "failure",
      error: err.message,
    });
  }
});



app.listen(PORT, function () {
  console.log(`server running on port ${PORT}`);
});
