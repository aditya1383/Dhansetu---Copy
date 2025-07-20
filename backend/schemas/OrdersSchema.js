const {Schema} = require('mongoose');

const OrdersSchema = new Schema({
    name:String,
    qty: Number,
    price:Number,
    mode: String,

    // link to user
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
});

module.exports = {OrdersSchema};