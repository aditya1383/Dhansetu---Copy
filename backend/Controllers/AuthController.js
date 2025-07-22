
// const User = require("../models/UserModel");
const { userModel: User } = require("../models/UserModel");
const {createSecretToken} = require("../util/SecretToken");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.signup = async (req, res, next) => {
    try {
        const {email, password, username, createdAt} = req.body;
        console.log(email, username, password);
        // const existingUser = await User.findOne({email});
         const existingUser = await User.findOne({ email });
        if(existingUser) {
            return res.json({message:"User already exist"});
        }
        const user = await User.create({email, password, username, createdAt});
        const token = createSecretToken(user._id);
        // console.log("Generated token", token);
        // at deploy
      //   res.cookie("token", token, {
      //       withCredentials: true,
      // httpOnly: false,
      //   });

        // after deploy
        res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None",
});


        res.status(201).json({message:"USer signed in Successfully", success:true, user});
        next();
    } catch(err) {
        console.error(err);
    }
}


module.exports.Login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if(!email || !password) {
           return res.json({message:"All Fields are required"});
        }

        const user = await User.findOne({email});
        if(!user) {
            return res.json({message:"Incorrect password or email"});
        }

        const auth = await bcrypt.compare(password, user.password);
        if(!auth) {
            return res.json({message:"Incorrect password or email"});
        }

        const token = createSecretToken(user._id);
      //   res.cookie("token", token, {
      //       withCredentials:true,
      //       // httpOnly: false,
      //        httpOnly: true,
      // sameSite: "lax",
      // secure: false,
      //   });

        // after deploy
        res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "None",
});

        

        res.status(201).json({message:"User loggedin successfully", success:true});
        next()
    } catch (error) {
        console.log(error);
    }
}
