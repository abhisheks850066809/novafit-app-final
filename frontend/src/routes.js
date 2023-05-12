import { Navigate, useRoutes,Routes,Route } from 'react-router-dom';

// layouts
import DashboardLayout from './layouts/dashboard';
import AdminDashboardLayout from './layouts/adminDashboard';
import TrainerDashboard from './layouts/trainerDashboard';
import SimpleLayout from './layouts/simple';
//
import Page404 from './pages/Page404';
import Subscriptipn from './pages/Subscription';
import Account from './pages/Accountt';
import Sessions from './pages/Session';
import Bmi from './pages/Bmi';
import DashboardAppPage from './pages/DashboardAppPage';
import AdminDashboardAppPage from './pages/AdminDashboardAppPage';
import TrainerDashboardAppPage from './pages/TrainerDashboardAppPage';

import AdminLogin from './pages/AdminLogin';
import Home1 from './pages/Home1';
import ContactUs from './pages/ContactUs';
import Booking from './pages/booking'
import Signup from './pages/TestSignup';
import TrainerLogin from './pages/TrainerLogin';
import TrainerSignup from './pages/TrainerSignup';
import TraineeSignup from './pages/TraineeSignup';
import TraineeLogin from './pages/TraineeLogin';
import FetchTrainers from './pages/FetchTrainers';
import FetchTrainees from './pages/FetchTrainees';
import FAQForm from './pages/FaqForm';
import AttendanceForm from './pages/Attendance';







// ----------------------------------------------------------------------



const Router=()=>{
  return(

    <Routes>
      <Route exact path="*" element={<Home1/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        <Route exact path="/booking" element={<Booking/>} />
        <Route exact path="/trainerlogin" element={<TrainerLogin/>} />
        <Route exact path="/trainersignup" element={<TrainerSignup/>} />
        <Route exact path="/traineesignup" element={<TraineeSignup/>} />
        <Route exact path="/traineelogin" element={<TraineeLogin/>} />
        <Route exact path="/adminlogin" element={<AdminLogin/>} />
        <Route exact path="/faq" element={<FAQForm/>} />
        <Route exact path="/faqform" element={<FAQForm/>} />
        

      
        {/* <Route exact path="/shop" Component={storetest} />
      
        <Route exact path="/FAQ" Component={Faqcode} />
        <Route exact path="/createprofile" Component={CreateProfile} />
        <Route exact path="/admin" Component={AdminLogin} />
        <Route exact path="/home2" Component={home2} /> */}

    <Route path="/dashboardtrainee/*" element={<DashboardLayout />} >
          <Route path="app"  element={<DashboardAppPage />}/>
          <Route path="bmi"  element={<Bmi />} />
          <Route path="subscription"  element={<Subscriptipn />} />
          <Route path="sessions"  element={<Sessions />} />
          <Route path="booksessions"  element={<Booking />} />
          <Route path="profile"  element={<Account />} />
          <Route path="attendance"  element={<AttendanceForm />} />
          <Route path="booksubscription"  element={<Account />} />
       </Route>

       <Route path="/dashboardtrainer/*" element={<DashboardLayout />} >
          <Route path="app"  element={<DashboardAppPage />}/>
          <Route path="bmi"  element={<Bmi />} />
          <Route path="subscription"  element={<Subscriptipn />} />
          <Route path="sessions"  element={<Sessions />} />
          <Route path="profile"  element={<Account />} />
          <Route path="attendance"  element={<Account />} />
          <Route path="logout"  element={<Account />} />
       </Route>
       <Route path="/dashboardadmin/*" element={<AdminDashboardLayout />} >
          <Route path="app"  element={<AdminDashboardAppPage />}/>
          <Route path="trainees"  element={<FetchTrainees />} />
          <Route path="trainers"  element={<FetchTrainers />} />
          <Route path="sessions"  element={<Sessions />} />
          <Route path="profile"  element={<Account />} />
          <Route path="attendance"  element={<Account />} />
          <Route path="logout"  element={<Account />} />
       </Route>

    </Routes>

    
    
  
  )
}
export {Router};