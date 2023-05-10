const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProfileSchema = new Schema({

    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'trainee',
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    height:{
        type:Number,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    goal:{
        type:String,
        required:true
    },

    vitals: [{
		body_temp: 
        { type: Number, required: true, },

		pulse_rate: 
        { type: Number, required: true, },

        resp_rate: 
        { type: Number, required: true, },

        blood_pressure: 
        { type: Number, required: true, },
	}],

});

module.exports = mongoose.model('Profile',ProfileSchema);