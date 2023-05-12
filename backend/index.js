// const connectToMongo=require('./db')
// const express = require('express')
// const dotenv=require('dotenv')
// dotenv.config();
// // var cors =require('cors')
// connectToMongo();

// const expressLayouts = require("express-ejs-layouts");
// const bodyParser = require("body-parser");


// const PORT =7000|| process.env.PORT;
// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })


// app.use(express.json())
// // app.use(cors)
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(expressLayouts);
// app.set("view engine", "ejs");

// app.use("/checkout", require("./routes/subscriptionpayment"));
// //Available api

// app.use('/api/authtrainee',require('./routes/authtrainee'))
// app.use('/api/authtrainer',require('./routes/authtrainer'))
// app.use('/api/authadmin',require('./routes/authadmin'))
// app.use('/api/traineeprofile',require('./routes/traineeprofile'))
// app.use('/api/sessions',require('./routes/sessions'))
// //app.use('/api/subscription',require('./routes/subscription'))
// // app.use('/api/faq',require('./routes/faq'))
// app.use('/api',require('./routes/contact'))
// app.use('/api',require('./routes/review'))
// // app.use('/api/notes',require('./routes/notes'))

// app.listen(PORT, () => {
//   console.log(`Example app listening on port ${PORT}`)
// })


//   // instrall npm i bcrypt for saltin
//  // install jsonwebtoken

const connectToMongo=require('./db');
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// var cors =require('cors')
connectToMongo();

app.use(cors());
app.options('*', cors())

const expressLayouts = require("express-ejs-layouts");


const port = 7000


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.json())
// app.use(cors)
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(expressLayouts);
app.set("view engine", "ejs");
app.use(morgan('tiny'));

app.use("/checkout", require("./routes/subscriptionpayment"));
require('dotenv/config');

//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');
//Available api

const api = process.env.API_URL;
 app.use(`${api}/categories`, categoriesRoutes);
 app.use(`${api}/products`, productsRoutes);
 app.use(`${api}/users`, usersRoutes);
 app.use(`${api}/orders`, ordersRoutes);


app.use('/api/authtrainee',require('./routes/authtrainee'))
app.use('/api/authtrainer',require('./routes/authtrainer'))
app.use('/api/authadmin',require('./routes/authadmin'))
app.use('/api/traineeprofile',require('./routes/traineeprofile'))
app.use('/api/sessions',require('./routes/sessions'))
app.use('/api/adminroutes',require('./routes/adminroutes'))
app.use('/api/attendance',require('./routes/attendance'))

//app.use('/api/subscription',require('./routes/subscription'))
// app.use('/api/faq',require('./routes/faq'))
app.use('/api',require('./routes/contact'))
app.use('/api',require('./routes/review'))
// app.use('/api/notes',require('./routes/notes'))



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


  // instrall npm i bcrypt for saltin
 // install jsonwebtoken