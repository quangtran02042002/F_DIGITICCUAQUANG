const express = require('express');
const { createUser, loginUserCtrl, getallUser, getAllOrders, getaUser, deleteaUser, updatedUser, blockUser, unblockUser, handleRefreshToken, logout, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishlist, saveAddress, userCart, getUserCart, createOrder, removeProductFromCart, updateProductQuantityFromCart, getMonthWiseOrderIncome, getYearlyTotalOrders, getSingleOrder, updateOrder, getMyOrders, emptyCart } = require('../controller/userCtrl');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const { checkout, paymentVerification } = require('../controller/paymentCtrl');
const router = express.Router();



router.post("/register", createUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);

router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);

router.post("/order/checkout", authMiddleware, checkout)
router.post("/order/paymentVerification", authMiddleware, paymentVerification)

// router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/create-order", authMiddleware, createOrder);

router.get("/all-users", getallUser);
// router.get("/get-orders", authMiddleware, getOrders);
router.get("/getmyorders", authMiddleware, isAdmin, getMyOrders);
router.get("/getallorders", authMiddleware, isAdmin, getAllOrders);
router.get("/getaOrder/:id", authMiddleware, isAdmin, getSingleOrder);
router.put("/updateOrder/:id", authMiddleware, isAdmin, updateOrder);
// router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderById);
router.get("/getMonthWiseOrderIncome", authMiddleware, getMonthWiseOrderIncome);
router.get("/getyearlyorders", authMiddleware, getYearlyTotalOrders);
router.get("/refresh", handleRefreshToken);
router.get('/logout', logout)
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);

router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/delete-product-cart/:cartItemId", authMiddleware, removeProductFromCart);
router.delete("/update-product-cart/:cartItemId/:newQuantity", authMiddleware, updateProductQuantityFromCart);


// router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/:id", deleteaUser);
// router.put("/order/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);

router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);

router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);




module.exports = router;