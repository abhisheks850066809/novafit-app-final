
import './signin.css'
import React, { useState } from 'react'
import { useNavigate} from 'react-router-dom'
//const NewComponent = React.createClass({
function TraineeSignup() {

    let nevigate = useNavigate();
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const{name,email,password}=credentials;
    const response = await fetch(`http://localhost:7000/api/authtrainee/createuser`, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify({name,email,password})
       
       
    });
    const json =await response.json()
    console.log(json)
    if(json.success)
    {
      localStorage.setItem('token',json.authtoken);
      nevigate("/login");
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
                    <div className="col-6 ">
                        <div className="wrapper ">
                            <div className="title-text">
                                <div className="title login" >
                                    Trainee Sign Up
                                </div>

                            </div>
                            <div className="form-container">

                                <div className="form-inner">
                                    <form action="#" className="signup">
                                    <div className="field">
                                            <input type="text" placeholder="Name"  name="name"  value={credentials.name} onChange={onChange}minLength={5} required />
                                        </div>
                                        <div className="field">
                                            <input type="text" placeholder="Email Address" name="email"  value={credentials.email} onChange={onChange}minLength={5} required />
                                        </div>
                                        <div className="field">
                                            <input type="password" placeholder="Password" name="password"  value={credentials.password} onChange={onChange}minLength={5}  required />
                                        </div>
                                        <div className="field">
                                            <input type="password" placeholder="Confirm password" name="cpassword" required  value={credentials.cpassword} onChange={onChange}minLength={5}  />
                                        </div>
                                        <div className="field btn">
                                            <div className="btn-layer" />
                                            <input type="submit" defaultValue="Signup" onClick={handleSubmit} />
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
export default TraineeSignup;