// const {userModel: User} = require("../models/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = async (req, res) => {
//     try {
//         const token = req.cookies.token;
//     if(!token) {
//         return res.json({status: false});
//     }

//     const data = jwt.verify(token, process.env.TOKEN_KEY);
//     const user  = await User.findById(data.id);
//     if(user) return res.json({status:true, user:user.username});
//     else return res.json({status:false});
//     } catch(err) {
//         return res.json({status:false});
//     }
// }

// mine
const {userModel: User} = require("../models/UserModel");
require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.userVerification = (req, res) => {
  // const token = req.cookies.token  before deploy
  const token = req.cookies?.token; // after deploy
  if (!token) {
    return res.json({ status: false })
  }
  jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
    if (err) {
     return res.json({ status: false })
    } else {
      const user = await User.findById(data.id)
      if (user) return res.json({ status: true, user: user.username })
      else return res.json({ status: false })
    }
  })
}
