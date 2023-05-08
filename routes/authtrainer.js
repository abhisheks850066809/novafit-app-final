const express = require('express');
const {body, validationResult} = require('express-validator');
const router = express.Router()
const Trainer = require('../models/Trainer')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');
// const {is} = require('express/lib/request');
const fetchtrainer=require("../middleware/fetchtrainer")
const JWT_SECRET = "Abhiisgood$hi"

// Route 1 create a user doenst require auth api/authtrainer/createuser no login required
router.post('/createuser', [
    body('name', 'Name must be 3character long').isLength(
        {min: 3}
    ),
    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password must be  3 character long').isLength(
        {min: 3}
    )
], async (req, res) => {
    const errors = validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    try {

        let trainer = await Trainer.findOne({email: req.body.email});
        if (trainer) {
            return res.status(400).json({error: "Sorry email already exists"})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        trainer = await Trainer.create({
            name: req.body.name, 
            password: secPass, 
            email: req.body.email,
            experience:req.body.experience,
            expertise:req.body.expertise,
            location:req.body.location})
        const data = {
            trainer: {
                id: trainer.id
            }
        }

        const authtoken = jwt.sign(data, JWT_SECRET);

        res.json({authtoken})
    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }
})

//  Route 2 Authenticate a user doenst require auth api/auth/login, no login required
router.post('/login', [

    body('email', 'Enter a Valid Email').isEmail(),
    body('password', 'Password cant not be blank').exists()
], async (req, res) => {

    const errors = validationResult(req);
    if (! errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    const {email, password} = req.body;
    try {
        let trainer = await Trainer.findOne({email});
        if (! trainer) {
            return res.status(400).json({error: "please try to login with correct credintails"})
        }
        const passwordCompare = await bcrypt.compare(password, trainer.password);
        if (! passwordCompare) {
            return res.status(400).json({error: "please try to login with correct credintails"})
        }
        const data = {
            trainer: {
                id: trainer.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET);
        res.json({authtoken})

    } catch (error) {
        console.error(error.message)
        res.status(500).send("Internal Server Error")
    }

})


//  Route 3 Get logged user details using POST  auth api/auth/getuser,  login required
router.post('/getuser', fetchtrainer,async (req, res) => {
try {
     trainerId=req.trainer.id
    const trainer =await Trainer.findById(trainerId).select("-password")
    res.send(trainer)
} catch (error) {
    
    console.error(error.message);
    res.status(500).send("Internal Server Error")
}
})
module.exports = router
