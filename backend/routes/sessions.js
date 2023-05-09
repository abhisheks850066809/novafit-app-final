const express = require('express')
const mongoose = require("mongoose");
const router = express.Router();
const Trainer = require('../models/Trainer');
const Subscription = require('../models/SubscriptionSchema');
const Session = require('../models/Sessions');
const fetchtrainee = require('../middleware/fetchtrainee')
//const { computeHeadingLevel } = require('@testing-library/react');



router.post('/booksession',async (req, res) => {
    try {
      const { userId, activity, slot, date } = req.body;
  
      // Find the subscription for the user
      const subscription = await Subscription.findOne({trainee:userId,isActive:true });
      // console.log(userId)
      // console.log(subscription.isActive)
      if (!subscription) {
        return res.status(400).json({ message: "User does not have an active subscription" });
      }
  
      // Check if the user has any remaining sessions in their subscription
      if (subscription.sessions < 1) {
        return res.status(400).json({ message: "User does not have any remaining sessions in their subscription" });
      }
  
      // Find the session to book
      const sess = await Session.findOne({userId,activity, slot, date });
      if (sess) {
        return res.status(400).json({ message: "you have already booked the session" });
      }
      
      // Check if the session has reached its maximum capacity
      const sessionCount = await Session.countDocuments({ activity: activity, slot: slot, date: date});
      if (sessionCount >= 2) {
        return res.status(400).json({ message: "Slot not available" });
      }
  
      // Find a trainer with expertise in the session's activity
  
  
      // Update the session with the user and decrement the subscription's sessionsLeft count

      const session = new Session({
      userId :userId,
      activity :activity,
      slot : slot,
      date :date,
      trainerId :null,
      })

      if (sessionCount === 0) {
        const trainer = await Trainer.findOne({ expertise: activity });
        if (!trainer) {
          return res.status(400).json({ message: "No trainer available" });
        }
        session.trainerId = trainer._id;
      } else {
        // get the trainer assigned to this slot and assign the same trainer to this session
        const assignedSession = await Session.findOne({ activity: activity, slot: slot, date: date});
        session.trainerId = assignedSession.trainerId;
      }
  
      await session.save();
      subscription.sessions -= 1;
      await subscription.save();
  
      res.json({ message: "Session booked successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Server Error" });
    }
  })



  router.post('/cancelSession' , async (req, res) => {
    try {
      const { userId, sessionId } = req.body;
  
      // Find the session to cancel
      const session = await Session.findById(sessionId);
      if (!session) {
        return res.status(400).json({ message: "Session not found" });
      }

      // Check if the user owns the session
      if (session.userId.toString() !== new mongoose.Types.ObjectId(userId).toString()) {
        return res.status(400).json({ message: "User does not own the session" });
      }
  
      // Calculate the time difference between the session start time and the current time
      const sessionStart = new Date(`${session.date} ${session.slot}`);
      const timeDiff = sessionStart.getTime() - Date.now();
  
      // Check if the time difference is less than 48 hours (172800000 milliseconds)
      if (timeDiff < 60000) {
        return res.status(400).json({ message: "Session cannot be cancelled within 48 hours of its start time" });
      }
  
      // Reset the session properties and save the changes to the Session collection
      //session.userId = null;
      //session.trainerId = null;
      
      session.isAvailable = true;
      await session.save();
  
      // Increment the subscription's sessionsLeft count and save the changes to the Subscription collection
      const subscription = await Subscription.findOne({ user: userId, isActive: true });
      subscription.sessions += 1;
      await subscription.save();
  
      res.json({ message: "Session cancelled successfully" });

      await Session.deleteOne({_id: sessionId });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server Error" });
    }
  })

  router.get("/getsessions/:id", async (req, res) => {
    try {
      const userId = req.params.id;
      const sessions = await Session.find({ userId: userId });
      res.json(sessions);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });



  router.get('/getsubscriptions/:id', async (req, res) => {
    try {
      const userId = req.params.id;
      const subscriptions = await Subscription.find({ trainee: userId });
      res.json(subscriptions);
    } catch (err) {
      console.error(err);
      res.status(500).send("Server error");
    }
  });
  
    
    
    
    
    
    
  
  
module.exports = router;