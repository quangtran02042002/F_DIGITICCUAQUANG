const Razorpay = require("razorpay")
const instance = new Razorpay({
    key_id: "rzp_test_9TRrgKY1NAHMXV", key_secret: "feGfjIm2GotWYCanS0tlyQjY"
})


const checkout = async (req, res) => {
    const { amount } = req.body
    const option = {
        acmount: amount * 100,
        currency: "VND"
    }
    const order = await instance.orders.create(option)
    res.json({
        success: true,
        order
    })
}
const paymentVerification = async (req, res) => {
    const { razorpayOrderId, razorpayPaymentId } = req.body
    res.json({
        razorpayOrderId, razorpayPaymentId
    })
}

module.exports = {
    checkout, paymentVerification
}