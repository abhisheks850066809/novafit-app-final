import React,{useState} from "react";
import './signin.css'
import { useNavigate} from 'react-router-dom'
//const NewComponent = React.createClass({
function TraineeLogin() {
  let nevigate = useNavigate();
    const [credentials, setCredentials] = useState({email:"",password:""})
 
   

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:7000/api/authtrainee/login`, {
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
          nevigate("/createprofile")
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
                  Trainee Login
                </div>

              </div>
              <div className="form-container">

                <div className="form-inner">
                  <form action="#" className="login">
                    <div className="field">
                      <input type="text" placeholder="Email Address" name="email" required value={credentials.email} onChange={onChange}/>
                    </div>
                    <div className="field">
                      <input type="password" placeholder="Password" name="password" value={credentials.password} onChange={onChange} required />
                    </div>
                    <div className="signup-link">
                      <a class="btn btn-secondary">forgot password ?</a>
                    </div>
                    <div className="field btn">
                      <div className="btn-layer" />
                      <input type="submit" defaultValue="Login"  onClick={handleSubmit}/>
                    </div>

                    <div className="signup-link">
                      Not a member?
                      <a href="/traineesignup" class="btn btn-secondary">Sign Up</a>
                    </div>
                  </form>
                  <form action="#" className="signup">
                    <div className="field">
                      <input type="text" placeholder="Email Address" required />
                    </div>
                    <div className="field">
                      <input type="password" placeholder="Password" required />
                    </div>
                    <div className="field">
                      <input type="password" placeholder="Confirm password" required />
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
export default TraineeLogin;