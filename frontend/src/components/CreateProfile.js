import React, {useState} from "react";
// const jwt = require('jsonwebtoken');
import { useNavigate} from 'react-router-dom'

import "./createprofile.css";

const GymUserForm = () => {
    let nevigate = useNavigate();
    const [gender, setGender] = useState('');
    const [programEnrolled, setProgramEnrolled] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bodyTemperature, setBodyTemperature] = useState('');
    const [dob, setDob] = useState('');
    const [pulseRate, setPulseRate] = useState('');
    const [bloodPressure, setBloodPressure] = useState('');
    const [respRate, setRespRate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        // const userId = jwt.decode(token)._id;
        console.log(token)
        const response = await fetch(`http://localhost:7000/api/traineeprofile/createtraineeprofile`, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': `Bearer ${token}`,
                'auth-token':`${token}`
            },
            body: JSON.stringify(
                {
                    // userId,
                    // Name: userId.name,
                    // email: userId.email,
                    gender: gender,
                    dob: dob,
                    height: height,
                    weight: weight,
                    goal: programEnrolled,
                    vitals: [
                        {
                            body_temp: bodyTemperature,
                            pulse_rate: pulseRate,
                            resp_rate: respRate,
                            blood_pressure: bloodPressure
                        }
                    ]
                }
            )
        });
        const json =await response.json()
        console.log(json)
        if (json.success) {
            alert('Profile created successfully!', 'success');
            nevigate("/dashboard");
            // Redirect to dashboard or profile page
        } else {
            alert(json.message, 'danger');
        }
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        switch (name) {
            case 'gender':
                setGender(value);
                break;
            case 'programEnrolled':
                setProgramEnrolled(value);
                break;
            case 'height':
                setHeight(value);
                break;
            case 'weight':
                setWeight(value);
                break;
            case 'bodyTemperature':
                setBodyTemperature(value);
                break;
            case 'dob':
                setDob(value);
                break;
            case 'pulseRate':
                setPulseRate(value);
                break;
            case 'bloodPressure':
                setBloodPressure(value);
                break;
            case 'respRate':
                setRespRate(value);
                break;
            default:
                break;
        }
    };


    return (


        <form className="gym-user-form"
            onSubmit={handleSubmit}>
            <label>
                Gender:
                <select name="gender"
                    value={gender}
                    onChange={handleChange}
                    required>
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                </select>
            </label>

            <label>
                Goal:
                <select name="programEnrolled"
                    value={programEnrolled}
                    onChange={handleChange}
                    required>
                    <option value="">Select goal</option>
                    <option value="cardio">Zumba</option>
                    <option value="strength-training">Strength Training</option>
                    <option value="yoga">Swimming</option>
                    <option value="fat-burning">Fat burning</option>
                    <option value="power-yoga">Power Yoga</option>
                    <option value="cycling">Cycling</option>
                </select>
            </label>

            <label>
                Height (cm):
                <input type="number" name="height"
                    value={height}
                    onChange={handleChange}
                    required/>
            </label>

            <label>
                Weight (kg):
                <input type="number" name="weight"
                    value={weight}
                    onChange={handleChange}
                    required/>
            </label>

            <label>
                Body Temperature (C):
                <input type="number" name="bodyTemperature"
                    value={bodyTemperature}
                    onChange={handleChange}
                    required/>
            </label>

            <label>
                Date of Birth:
                <input type="date" name="dob"
                    value={dob}
                    onChange={handleChange}
                    required/>
            </label>
            <label>
                Pulse Rate:
                <input type="number" name="pulseRate"
                    value={pulseRate}
                    onChange={handleChange}
                    required/>
            </label>

            <label>
                Blood Pressure (mmHg):
                <input type="text" name="bloodPressure"
                    value={bloodPressure}
                    onChange={handleChange}
                    required/>
            </label>

            <label>
                Respiratory Rate:
                <input type="number" name="respRate"
                    value={respRate}
                    onChange={handleChange}
                    required/>
            </label>

            <button type="submit">Assignment</button>
            <button type="submit">Submit</button>
        </form>
    );
};

export default GymUserForm;
