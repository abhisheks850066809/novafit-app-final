
import './styles/Signin.css'
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
import { Container } from '@mui/system';

function TrainerSignup() {

    const navigate = useNavigate();
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",expertise:"",experience:0,location:""})

  const handleSubmit=async(e)=>{
    e.preventDefault();
    console.log(credentials)
    const{name,email,password,expertise,experience,location}=credentials;
    const response = await fetch(`http://localhost:7000/api/authtrainer/createuser`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        
        body:JSON.stringify({name,email,password,expertise,experience,location})
       
       
    });
   
    const json =await response.json()
    console.log(json)
    if(json.success)
    {
      localStorage.setItem('token',json.authtoken);
      navigate("/trainerlogin");
    //   props.showAlert("Account Created Successfully","success");
    }
  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
}

    return (
    
        <div>
            {/* Created By CodingNepal */}
            <meta charSet="utf-8" />

            <link rel="stylesheet" href="signin2.css" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <div className="container">
                <div className="row">
                    <div className="col-4 ">
                        <div className="wrapper ">
                            <div className="title-text">
                                <div className="title login" >
                                    Trainer Sign Up 
                                </div>

                            </div>
                            <div className="form-container">

                                <div className="form-inner">
                                    <form  className="signup" onSubmit={handleSubmit}>
                                        <div className="field">
                                            <input type="text" placeholder="Name" name="name" value={credentials.name} onChange={onChange} required />
                                        </div>
                                        <div className="field">
                                            <input type="Email" placeholder="Email Address" name="email" value={credentials.email} onChange={onChange} required />
                                        </div>
                                        <div className="field">
                                            <input type="password" placeholder="Password"  name="password" value={credentials.password} onChange={onChange} required />
                                        </div>
                                        <br />
                                        <div className="formbold-mb-5" style={{ color: "grey" }} >
                                            <div>
                                                <label htmlFor="Sessions">Type of training:
                                                <select name="expertise" value={credentials.expertise} onChange={onChange} required >
                                                    <option value="Zumba">Zumba</option>
                                                    <option value="swimming">Swimming</option>
                                                    <option value="Power yoga">Power Yoga</option>
                                                    <option value="Strength training">Strength training</option>
                                                    <option value="Cycling">Cycling</option>
                                                    <option value="Fat burning">Fat burning</option>
                                                </select>
                                                </label>
                                            </div>

                                        </div>

                                        <div className="field">
                                            <input type="number"  placeholder="Experience"  name="experience" value={credentials.experience} onChange={onChange} required />
                                        </div>
                                        <div className="field">
                                            <input type="text" name="location" value={credentials.location} onChange={onChange} placeholder="Location" required />
                                        </div>
                                        <div className="field btn">
                                            <div className="btn-layer" />
                                            <input type="submit" defaultValue="Signup" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    

    );
}
export default TrainerSignup;