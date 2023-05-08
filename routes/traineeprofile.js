const express = require('express');
const Profile = require('../models/TraineeProfile');
const Trainee = require('../models/Trainee');
const router = express.Router();
const{ body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchtrainee');
const fetchtrainee = require('../middleware/fetchtrainee');
const JWT_SECRET = "Abhiisgood$hi"

//Route 1: Creating user profile :POST method login required

router.post('/createtraineeprofile',fetchtrainee,async (req,res) => {
    let success=false;
    const{dob,gender,weight,height,goal,vitals}= req.body;

    try{
        const traineeId = req.traineeId;
        console.log(traineeId);
        const trainee = await Trainee.findById(traineeId);

        if(!trainee){
            return res.status(404).send("user not found");
        }

        const profile = new Profile({
            userId:trainee._id,
            name:trainee.name,
            email:trainee.email,
            dob,
            gender,
            weight,
            height,
            goal,
            vitals
        });

        await profile.save();
        success=true;
        res.json({success})

        return res.status(201).send({ message: 'profile created successfully'});
    }catch(err){
        console.log(err);
        return res.status(500).send({message: 'Server error'});
    }
});


//Route 4: update user profile using PUT: Login Required

router.put('/updatetraineeprofile/:id',fetchtrainee,async(req,res) =>{
    const profileId = req.params.id;
    const{ dob,gender,weight,height,vitals } = req.body;

    try{
        const profile = await Profile.findById(profileId);

        if(! profile){
            return res.status(404).send({message: 'Profile not found'});
        }

        profile.dob = dob || profile.dob;
        profile.gender = gender || profile.gender;
        profile.weight = weight || profile.weight;
        profile.height = height || profile.height;
        profile.vitals = vitals || profile.vitals

        await profile.save();

        return res.status(200).send({message: 'profile updated Successfully'});
    }catch(err){
        console.error(err);
        return res.status(500).send({message: ' Server error'});
    }
})


//Get Trainee profile Login required
router.get('/gettraineeprofile/:id',fetchtrainee,async (req,res) => {
    const profileId = req.params.id;

    try{
        const profile = await Profile.findById(profileId);

        if(! profile){
            return res.status(404).send({message: 'Profile not found'});
        }

        res.json({
            name:profile.name,
            email:profile.email,
            gender:profile.gender,
            dob:profile.dob,
            height:profile.height,
            weight:Profile.weight,
            userId:profile.userId,
            vitals:profile.vitals,
            goal:profile.goal
        });


}catch(err){
    console.error(err);
    res.send(500).send("Internal Server Error");
}
});

module.exports = router;