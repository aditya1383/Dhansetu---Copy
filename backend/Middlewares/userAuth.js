const {userModel: User} = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userAuth =  async (req, res, next) => {
    const token = req.cookies.token;
    if(!token) return res.status(401).json({status:false});

    jwt.verify(token, process.env.TOKEN_KEY, async(err,data) => {
        if(err) return res.status(401).json({status:false});

        const user = await User.findById(data.id);
        if (!user) return res.status(401).json({ status: false });

    req.user = user; // Now accessible in any route
    next();
    })
}


// after deploy
// module.exports.userAuth = async (req, res, next) => {
//   try {
//     const token = req.cookies?.token;
//     if (!token) return res.status(401).json({ status: false });

//     const data = jwt.verify(token, process.env.TOKEN_KEY);
//     const user = await User.findById(data.id);
//     if (!user) return res.status(401).json({ status: false });

//     req.user = user;
//     next();
//   } catch (err) {
//     return res.status(401).json({ status: false });
//   }
// };
