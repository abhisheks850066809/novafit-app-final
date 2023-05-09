const express = require('express')
const mongoose = require('mongoose');
const router = express.Router();
const Subscription = require('../models/SubscriptionSchema');
const Trainee = require('../models/Trainee');
const Trainer = require('../models/Trainer');
const Payment = require('../models/Payment');
// const { findById } = require('../models/Payment');


// const fetchTraineeIdByEmail = async (email) => {

//   try {
//     const trainee = await Trainee.findOne({ email });
//     if (trainee) {
//       return trainee._id; // Returns the traineeId
//     } else {
//       return null; // Returns null if trainee is not found
//     }
//   } catch (error) {
//     console.error(error);
//     return null; // Returns null in case of error
//   }
// };

const handleSubscription = async(email , paymentId) => {
 try{
   console.log(email);
   console.log(paymentId);
    //const trainee = fetchTraineeIdByEmail(email);
    const trainee = await Trainee.findOne( {'email':email} );
    console.log(trainee._id);
    const pay = await Payment.findOne({ 'paymentId': paymentId });
    const payId = pay._id
    console.log(payId);
  

    const subs = await Subscription.findOne({ trainee: trainee._id, isActive: true });
    if (subs) {
      throw new Error('User already has an active subscription');
    }

    let trainer = null;
    if (pay.plan === 'platinum') {
      trainer = await Trainer.findOne({ experience: { $gte: 5 }, expertise: 'gym' });
    } else {
      const gymTrainer = await Trainer.findOne({ experience: { $lte: 5 }, expertise: 'gym' });
      if (gymTrainer) {
        trainer = gymTrainer;
      }
    }
    console.log("trainee", trainee);
    console.log("trainer", trainer);
    console.log(pay.plan);
    const duration = pay.plan === 'silver' ? 30 : pay.plan === 'gold' ? 90 : 180;
    const sessions =pay.plan === 'silver' ? 2 :pay.plan=== 'gold' ? 10 : 999;
    const price = pay.plan=== 'silver' ? 500 : pay.plan === 'gold' ? 1200 : 5000;

    console.log(pay.status);

    if (pay.status !== 'success') {
      throw new Error('Invalid payment ID or payment not successful');
    }

    const subscription = new Subscription({
      name: pay.plan,
      price: price,
      duration: duration,
      sessions: sessions,
      trainer: trainer._id,
      trainee: trainee._id,
      expiry: new Date(Date.now() + duration * 24 * 60 * 60 * 1000),
      isActive: true,
      status: 'success',
    });

    await subscription.save();
    //return subscription;
  } catch (error) {
    console.error(error);
    throw new Error('Server error');
  }
};





  














// router.post('/createSubscription',async (req, res) => {
//   try {
//     const userId = req.body.userId;
//     const user = await Trainee.findById(userId);
//     if (!user) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     const Subs = await Subscription.findOne({ user: userId, isActive: true });

//     if (Subs) {
//       return res.status(400).json({ message: 'User already has an active subscription' });
//     }

//     let trainer = null;
//     if (req.body.name === 'platinum') {
//       trainer = await Trainer.findOne({ experience: { $gte: 5 }, expertise: 'gym' });
//     } else {
//       const gymTrainer = await Trainer.findOne({experience: {$lte: 5}, expertise: 'gym' });  //less than 5
//       if (gymTrainer) {
//         trainer = gymTrainer._id;
//       }
//     }

//     const duration =
//       req.body.name === 'silver'
//         ? 30
//         : req.body.name === 'gold'
//         ? 90
//         : 180;

//     const sessions =
//       req.body.name === 'silver'
//         ? 2
//         : req.body.name === 'gold'
//         ? 10
//         : 999;

//         const price = 
//         req.body.name === 'silver'
//         ? 500
//         :  req.body.name === 'gold'
//         ? 1200
//         : 5000;

//    const payment = await Payment.findById(req.body.paymentId);
//   if (!payment || payment.status !== 'success') {
//     return res.status(400).send('Invalid payment ID or payment not successful');
//   }

//     const subscription = new Subscription({
//       name: req.body.name,
//       price: price,
//       duration: duration,
//       sessions: sessions,
//       trainer: trainer,
//       user: user._id,
//       expiry: new Date(Date.now() + duration * 24 * 60 * 60 * 1000),
//       isActive: true,
//       status : "success"
//     });

//     await subscription.save();

//     return res.status(201).json(subscription);
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Server error' });
//   }
// });




// const createSubscription = async (userId, name, paymentId) => {
//   try {
//     const user = await Trainee.findById(userId);
//     if (!user) {
//       throw new Error('User not found');
//     }

//     const subs = await Subscription.findOne({ user: userId, isActive: true });
//     if (subs) {
//       throw new Error('User already has an active subscription');
//     }

//     let trainer = null;
//     if (name === 'platinum') {
//       trainer = await Trainer.findOne({ experience: { $gte: 5 }, expertise: 'gym' });
//     } else {
//       const gymTrainer = await Trainer.findOne({ experience: { $lte: 5 }, expertise: 'gym' });
//       if (gymTrainer) {
//         trainer = gymTrainer._id;
//       }
//     }

//     const duration = name === 'silver' ? 30 : name === 'gold' ? 90 : 180;
//     const sessions = name === 'silver' ? 2 : name === 'gold' ? 10 : 999;
//     const price = name === 'silver' ? 500 : name === 'gold' ? 1200 : 5000;

//     const payment = await Payment.findById(paymentId);
//     if (!payment || payment.status !== 'success') {
//       throw new Error('Invalid payment ID or payment not successful');
//     }

//     const subscription = new Subscription({
//       name: name,
//       price: price,
//       duration: duration,
//       sessions: sessions,
//       trainer: trainer,
//       user: user._id,
//       expiry: new Date(Date.now() + duration * 24 * 60 * 60 * 1000),
//       isActive: true,
//       status: 'success',
//     });

//     await subscription.save();
//     return subscription;
//   } catch (error) {
//     console.error(error);
//     throw new Error('Server error');
//   }
// };

















// router.post('/checkSubscription/:id',async (req, res, next) => {
//   try {
//     const subscription = await Subscription.findById(req.params.id);
//     if (!subscription) {
//       return res.status(404).json({ error: 'Subscription not found' });
//     }

//     if (subscription.expiry < new Date()) {
//       subscription.isActive = false;
//       await subscription.save();
//     }

//     req.subscription = subscription;
//     return res.status(201).json(subscription);
//     next();
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ error: 'Server error' });
//   }
// });

module.exports = handleSubscription;

