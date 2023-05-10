const connectToMongo=require('./db')
const express = require('express')
// var cors =require('cors')
connectToMongo();

const expressLayouts = require("express-ejs-layouts");
const bodyParser = require("body-parser");


const port = 7000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(express.json())
// app.use(cors)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressLayouts);
app.set("view engine", "ejs");

app.use("/checkout", require("./routes/subscriptionpayment"));
//Available api

app.use('/api/authtrainee',require('./routes/authtrainee'))
app.use('/api/authtrainer',require('./routes/authtrainer'))
app.use('/api/authadmin',require('./routes/authadmin'))
app.use('/api/traineeprofile',require('./routes/traineeprofile'))
app.use('/api/sessions',require('./routes/sessions'))
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