const Razorpay = require("razorpay")
const instance = new Razorpay({
    key_id: "rzp_test_jhcFgwnMlBYMps", key_secret: "VCLvCDb46IhWrNypqeudgdM0"
})


// const checkout = async (req, res) => {
//     const { amount } = req.body
//     const option = {
//         acmount: amount * 100,
//         currency: "VND"
//     }
//     const order = await instance.orders.create(option)
//     res.json({
//         success: true,
//         order
//     })
// }

const checkout = async (req, res) => {
    const { amount } = req.body
    const option = {
        amount: amount * 100,
        currency: 'INR'
    }
    instance.orders.create(option)
        .then(order => {
            res.json({
                success: true,
                order
            })
        })
        .catch(error => {
            res.json({
                success: false,
                error: error.message
            })
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