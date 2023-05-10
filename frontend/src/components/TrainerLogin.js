import React,{useState} from "react";
import { useNavigate} from 'react-router-dom'
import './signin.css'
//const NewComponent = React.createClass({
function TrainerLogin() {
    let nevigate = useNavigate();
    const [credentials, setCredentials] = useState({email:"",password:""})
 
   

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:7000/api/authtrainer/login`, {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
           
        });
      
        const json =await response.json()
        console.log(json)
        if(json.success){
          // save the auth token and redirect
          localStorage.setItem('token',json.authtoken);
          nevigate("/trainerdashboard")
          // props.alert.showAlert("Account Logged in Successfully","success");
          // console.log(props.alert.message)

        }
        else{
        //  props.showAlert("Invalid Credentials","danger")
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
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
            <div className="container">
                <div className="row">
                    <div className="col-6 ">
                        <div className="wrapper ">
                            <div className="title-text">
                                <div className="title login">
                                    Trainer Login
                                </div>

                            </div>
                            <div className="form-container">

                                <div className="form-inner">
                                    <form onSubmit={handleSubmit} className="login">
                                        <div className="field">
                                            <input type="Email"  name="email" placeholder="Email Address" value={credentials.email} onChange={onChange} required />
                                        </div>
                                        <div className="field">
                                            <input type="password" name="password" placeholder="Password" value={credentials.password} onChange={onChange} required />
                                        </div>
                                        <div className="signup-link">
                                            <a class="btn btn-secondary">forgot password ?</a>
                                        </div>

                                        <div className="field btn">
                                            <div className="btn-layer" />
                                            <input type="submit" defaultValue="Login" />
                                        </div>
                                        <div className="signup-link">
                                            Not a member?
                                            <a href="/trainersignup" class="btn btn-secondary">Trainer Signup</a>
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
export default TrainerLogin;