const {Schema} = require("mongoose");
const bcrypt = require("bcryptjs");


const userSchema = new Schema({
    email: {
        type: String,
        required : [true, "Your Email is Required"],
        unique: true,
    },
    username: {
        type: String,
        required: [true, "Username is required"]
    },
    password: {
        type: String,
        required: [true, "Your password is required"],
    },
    date: {
        type: Date,
        default: new Date(),
    },
});

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
})

module.exports = {userSchema}