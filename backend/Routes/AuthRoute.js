const {signup, Login} =  require("../Controllers/AuthController");
const {userVerification} = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", signup);
router.post('/login', Login);

router.post('/',userVerification);

router.post("/logout", (req, res) => {
  res.clearCookie("token", {
    sameSite: "lax",
    secure: false,         // match original cookie settings
  });
  res.status(200).json({ message: "Logged out" });
});

module.exports = router;