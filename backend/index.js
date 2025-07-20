require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const {HoldingsModel} = require('./models/HoldingsModel');
const {PositionsModel} = require("./models/PositionsModel");
const {OrdersModel} = require("./models/OrdersModel");

const jwt = require("jsonwebtoken");

const authRoute = require("./Routes/AuthRoute");
const { userAuth } = require("./Middlewares/userAuth");
const app = express();

app.use(cors({
     origin: "https://dhansetu-frontend.onrender.com",
    credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
// app.use(bodyParser.json());

app.use("/", authRoute);

// app.get("/addHoldings",async (req, res) => {
//     const tempHoldings =  [
//   {
//     name: "BHARTIARTL",
//     qty: 2,
//     avg: 538.05,
//     price: 541.15,
//     net: "+0.58%",
//     day: "+2.99%",
//   },
//   {
//     name: "HDFCBANK",
//     qty: 2,
//     avg: 1383.4,
//     price: 1522.35,
//     net: "+10.04%",
//     day: "+0.11%",
//   },
//   {
//     name: "HINDUNILVR",
//     qty: 1,
//     avg: 2335.85,
//     price: 2417.4,
//     net: "+3.49%",
//     day: "+0.21%",
//   },
//   {
//     name: "INFY",
//     qty: 1,
//     avg: 1350.5,
//     price: 1555.45,
//     net: "+15.18%",
//     day: "-1.60%",
//     isLoss: true,
//   },
//   {
//     name: "ITC",
//     qty: 5,
//     avg: 202.0,
//     price: 207.9,
//     net: "+2.92%",
//     day: "+0.80%",
//   },
//   {
//     name: "KPITTECH",
//     qty: 5,
//     avg: 250.3,
//     price: 266.45,
//     net: "+6.45%",
//     day: "+3.54%",
//   },
//   {
//     name: "M&M",
//     qty: 2,
//     avg: 809.9,
//     price: 779.8,
//     net: "-3.72%",
//     day: "-0.01%",
//     isLoss: true,
//   },
//   {
//     name: "RELIANCE",
//     qty: 1,
//     avg: 2193.7,
//     price: 2112.4,
//     net: "-3.71%",
//     day: "+1.44%",
//   },
//   {
//     name: "SBIN",
//     qty: 4,
//     avg: 324.35,
//     price: 430.2,
//     net: "+32.63%",
//     day: "-0.34%",
//     isLoss: true,
//   },
//   {
//     name: "SGBMAY29",
//     qty: 2,
//     avg: 4727.0,
//     price: 4719.0,
//     net: "-0.17%",
//     day: "+0.15%",
//   },
//   {
//     name: "TATAPOWER",
//     qty: 5,
//     avg: 104.2,
//     price: 124.15,
//     net: "+19.15%",
//     day: "-0.24%",
//     isLoss: true,
//   },
//   {
//     name: "TCS",
//     qty: 1,
//     avg: 3041.7,
//     price: 3194.8,
//     net: "+5.03%",
//     day: "-0.25%",
//     isLoss: true,
//   },
//   {
//     name: "WIPRO",
//     qty: 4,
//     avg: 489.3,
//     price: 577.75,
//     net: "+18.08%",
//     day: "+0.32%",
//   },
// ];

//     tempHoldings.forEach((item) => {
//         const newHolding = new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         })

//         newHolding.save();
//     })

//     res.send("Done");

// })



// app.get("/addPositions", async(req, res) => {
// //     let tempPositions = [
// //   {
// //     product: "CNC",
// //     name: "EVEREADY",
// //     qty: 2,
// //     avg: 316.27,
// //     price: 312.35,
// //     net: "+0.58%",
// //     day: "-1.24%",
// //     isLoss: true,
// //   },
// //   {
// //     product: "CNC",
// //     name: "JUBLFOOD",
// //     qty: 1,
// //     avg: 3124.75,
// //     price: 3082.65,
// //     net: "+10.04%",
// //     day: "-1.35%",
// //     isLoss: true,
// //   },
// // ];

//     tempPositions.forEach((item) => {
//         const newPosition = new PositionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         })

//         newPosition.save();
//     })

//     res.send("Done")
// })

app.get("/allHoldings", userAuth, async(req, res) => {
    try{
      const allHoldings = await HoldingsModel.find({user_id: req.user._id});
      res.json(allHoldings);
    } catch(err) {
       res.status(500).json({ status: false, error: "Failed to fetch orders" });
    }
});

app.get("/allPositions", async(req, res) => {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
});

// app.post("/newOrder", (req, res) => {
//     let newOrder = new OrdersModel({
//         name: req.body.name,
//         qty: req.body.qty,
//         price: req.body.price,
//         mode: req.body.mode,
//     });

//     let totalCost = (req.body.qty * req.body.price) + req.body.prevPrice;
//     let totalQty = req.body.qty + 1;
//     let avg = totalCost / totalQty;
//     let netValue = ((req.body.price - avg) / avg) * 100;
//     let net = netValue.toFixed(2) + "%";
//     let dayValue = ((req.body.price - req.body.prevPrice) / req.body.prevPrice) * 100;
//     let day = dayValue.toFixed(2) + "%";
//     let newHolding = new HoldingsModel({
//     name: req.body.name,
//     qty: req.body.qty,
//     avg: avg,
//     price: req.body.price,
//     net: net,
//     day: day,
//     })
//     newOrder.save().then(() => {
//         newHolding.save().then(() => {
//              res.status(200).json({ message: "Order and Holding saved", avg, net, day });
//         }).catch(err => res.status(500).json({ error: err }))
//     });
// })


app.post("/newOrder", userAuth, async (req, res) => {
  try {
    const { name, qty, price, mode, prevPrice } = req.body;
    console.log(prevPrice);
    const user_id = req.user._id;
    const newOrder = new OrdersModel({ name, qty, price, mode, user_id });

    // using existing holding to calculate p&l daychg etc
    const existingHolding = await HoldingsModel.findOne({name, user_id});


    const prevAvgCost = existingHolding ? existingHolding.avg   : prevPrice;


    const prevQty = existingHolding ? existingHolding.qty : 0;
    const prevMarketPrice = existingHolding ? existingHolding.price: prevPrice; //prevMarkeprice = prevHoldingprice


    let totalCost = (qty * price) + prevMarketPrice;
    // const totalCost = (prevQty * prevAvgCost) + (qty * price);
    let totalQty = qty + prevQty;
    let avg = totalCost / totalQty;
    let netValue = ((price - avg) / avg) * 100;

    if (netValue > 500) {
      netValue/=100;
    
    }
    
    let net = (netValue >= 0 ? "+" : "") + netValue.toFixed(2) + "%";

    let dayValue = ((price - prevMarketPrice) / prevMarketPrice) * 100;

     if(dayValue > 500) {
      dayValue/=100;
    }

    let day = (dayValue >= 0 ? "+" : "") + dayValue.toFixed(2) + "%";

    const newHolding = new HoldingsModel({ name, qty, avg, price, net, day, user_id });

    await newOrder.save();
    await newHolding.save();

    res.status(200).json({ message: "Order and Holding saved", avg, net, day });
  } catch (err) {
    console.error("Save failed:", err);
    res.status(500).json({ error: "Failed to save holding" });
  }
});

app.get("/allOrders",userAuth,  async (req, res) => {
   try {
         const allOrders = await OrdersModel.find({user_id: req.user._id});
    // console.log(allOrders);
    res.json(allOrders)
   } catch(err) {
     res.status(500).json({ status: false, error: "Failed to fetch orders" });
   }
}) 

app.listen(PORT, () => {
    console.log("app is listening at port", PORT);
    mongoose.connect(uri).then(() => {
        console.log("Connection successfull");
    }).catch((e) => {
        console.log("Connection Problem occured ", e);
    })
})
