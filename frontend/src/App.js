import logo from './logo.svg';
import './App.css';
//import payment from './components/payment';
import storetest from './components/storetest';
import TraineeLogin from './components/TraineeLogin';
import ContactUs from './components/ContactUs'
import home1 from './components/home1'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import booking from './components/booking';
import TraineeSignup from './components/TraineeSignup';
import TrainerSignup from './components/TrainerSignup';
import TrainerLogin from './components/TrainerLogin';
import home2 from './components/home2'
import { Profiler } from 'react';
import CreateProfile from './components/CreateProfile'
import Faqcode from './components/Faqcode'
import AdminLogin from './components/AdminLogin'

// import dashboard from './components/dashboard';



function App() {
  return (
    <>

      <Routes>
        <Route exact path="/" Component={home1} />
        <Route exact path="/contactus" Component={ContactUs} />
        <Route exact path="/shop" Component={storetest} />
        <Route exact path="/booking" Component={booking} />
        <Route exact path="/traineelogin" Component={TraineeLogin} />
        <Route exact path="/traineesignup" Component={TraineeSignup} />
        <Route exact path="/trainersignup" Component={TrainerSignup} />
        <Route exact path="/trainerlogin" Component={TrainerLogin} />
        <Route exact path="/FAQ" Component={Faqcode} />
        <Route exact path="/createprofile" Component={CreateProfile} />
        <Route exact path="/admin" Component={AdminLogin} />
        <Route exact path="/home2" Component={home2} />
        {/* <Route exact path="/checkout" Component={Checkout} /> */}

      </Routes>

      <footer />


    </>
  );
}

export default App;
