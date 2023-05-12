import React from 'react'
import { useNavigate} from 'react-router-dom'
import './styles/Home1.css'
import Bomg from "../assets/images/iconnova.png"
import heroBanner from '../assets/images/hero-banner.png';
import heroCircleOne from '../assets/images/hero-circle-one.png';
import heroCircleTwo from '../assets/images/hero-circle-two.png';
import trainerImage from '../assets/images/about-coach.jpg';
import aboutBannerImage from '../assets/images/about-banner.png';
import aboutCircleOneImage from '../assets/images/about-circle-one.png';
import fitnessImage from '../assets/images/fitness.png';
import aboutCircleTwoImage from '../assets/images/about-circle-two.png';
import class1Image from "../assets/images/class1.jpg";
import class2Image from "../assets/images/class2.jpg";
import class3Image from "../assets/images/class3.jpg";
import classIcon1Image from "../assets/images/class-icon-1.png";
import classIcon2Image from "../assets/images/class-icon-2.png";
import classIcon3Image from "../assets/images/class-icon-3.png";
import class4 from '../assets/images/class-4.jpg';
import classIcon4 from '../assets/images/class-icon-4.png';
import blogImage1 from '../assets/images/blog-1.jpg';
import blogImage2 from '../assets/images/blog-2.jpg';
import blogImage3 from '../assets/images/blog-3.jpg';
// import aboutCoachImg from '../assets/images/about-coach.jpg';




function Home1() {
    const nevigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token')
        nevigate("/")

    }
    return (
        <>
            <body id="top">


                <header className="header" data-header>
                    <div className="container">

                        <a href="#" className="logo">

                            <img src={Bomg} alt="BigCo Inc. logo" id="asasa" />
                            <span className="span">NovaFit</span>
                        </a>

                        <nav className="navbar" data-navbar>

                            <button className="nav-close-btn" aria-label="close menu" data-nav-toggler>
                                <ion-icon name="close-sharp" aria-hidden="true"/>
                            </button>

                            <ul className="navbar-list">

                                <li>
                                    <a href="#home" className="navbar-link active" data-nav-link>Home</a>
                                </li>

                                <li>
                                    <a href="#about" className="navbar-link" data-nav-link>About Us</a>
                                </li>



                                <li>
                                    <a href="#services" className="navbar-link" data-nav-link>Services</a>
                                </li>

                                <li>
                                    <a href="#class" className="navbar-link" data-nav-link>Classes</a>
                                </li>

                                <li>
                                    <a href="/contactus" className="navbar-link" data-nav-link>Contact Us</a>
                                </li>

                                <li>
                                    <a href="#Subscription" className="navbar-link" data-nav-link>Subscription</a>
                                </li>

                                <li>
                                    <a href="/shop" className="navbar-link" data-nav-link>Shop</a>
                                </li>


                            </ul>

                        </nav>
                        {!localStorage.getItem('token')?
                        <a href="/traineelogin" className="btn btn-secondary">LOGIN</a>:
                        <a href="/" className="btn btn-secondary" onClick={handleLogout}>LOGOUT</a>
                            }

                        <button className="nav-open-btn" aria-label="open menu" data-nav-toggler>
                            <span className="line"/>
                            <span className="line"/>
                            <span className="line"/>
                        </button>

                    </div>
                </header>





                <main>
                    <article>

                        <section className="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section
                            style={{ backgroundImage: "url('./assets/images/hero-bg.png')" }}>
                            <div className="container">

                                <div className="hero-content">

                                    <p className="hero-subtitle">
                                        <strong className="strong">The Best</strong>Fitness Club
                                    </p>

                                    <h1 className="h1 hero-title">Work Hard To Get Better Life</h1>



                                    <a href="#Subscription" className="btn btn-primary">Get Started</a>

                                </div>

                                <div className="hero-banner">
                                    <img src={heroBanner} width="1000" height="900" alt="hero banner" className="w-100" />

                                    <img src={heroCircleOne} width="666" height="666" aria-hidden="true" alt="hero circle one"
                                        className="circle circle-1" />
                                    <img src={heroCircleTwo} width="666" height="666" aria-hidden="true" alt=""
                                        className="circle circle-2" />


                                </div>
                            </div>
                        </section>
                         <section className="section about" id="about" aria-label="about">
                            <div className="container">
                                <div className="about-banner has-after">
                                    <img src={aboutBannerImage} width="660" height="648" loading="lazy" alt="aboutbanner"
                                        className="w-100" />

                                    <img src={aboutCircleOneImage} width="660" height="534" loading="lazy" aria-hidden="true"
                                        alt="" className="circle circle-1" />
                                    <img src={aboutCircleTwoImage} width="660" height="534" loading="lazy" aria-hidden="true"
                                        alt="" className="circle circle-2" />

                                    <img src={fitnessImage} width="650" height="154" loading="lazy" alt="fitness"
                                        className="abs-img w-100" />
                                </div>


                                <div className="about-content">

                                    <p className="section-subtitle">About Us</p>

                                    <h2 className="h2 section-title">Welcome To Our Fitness Gym</h2>

                                    <p className="section-text">
                                        Novafit is a fitness brand that promotes physical fitness, weight loss, healthy eating habits,
                                        stress reduction and improved overall well-being. The main goal of Novafit is to help users live
                                        a healthier lifestyle by providing support, guidance and encouragement to make positive changes
                                        in their daily routines.
                                    </p>

                                    <p className="section-text">
                                        Novafit has the best-in-class trainers and offers workouts ranging from yoga to boxing. Our workouts
                                        can be done at your nearest Novafit centres and at home with the help of our recorded videos.
                                        Novafit includes tracking and monitoring physical activity levels, provides customized workout plans,
                                        offers nutritional advice and meal planning and setting remainders to encourage users to stay on
                                        track with their goals.
                                    </p>

                                    <div className="wrapper">

                                        <div className="about-coach">

                                            <figure className="coach-avatar">
                                                <img src={trainerImage} width="65" height="65" loading="lazy" alt="Trainer" />
                                            </figure>

                                            <div>
                                                <h3 className="h3 coach-name">Kumar varun</h3>

                                                <p className="coach-title">Our Coach</p>
                                            </div>

                                        </div>

                                        <a href="#" className="btn btn-primary">Explore More</a>

                                    </div>

                                </div>
                            </div>
                        </section> 




                        <section className="section video" aria-label="video">
                            <div className="container">

                                <div className="video-card has-before has-bg-image"
                                    style={{ backgroundImage: "url('./assets/images/hero-bg.png')" }} >

                                    <h2 className="h2 card-title">Explore Fitness Life</h2>

                                    <button className="play-btn" aria-label="play video">
                                        <ion-icon name="play-sharp" aria-hidden="true"/>
                                    </button>

                                    <a href="#" className="btn-link has-before">Watch More</a>

                                </div>

                            </div>
                        </section>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br /><br />
                        <br /><br />
                        <br />

                        <section className="section class bg-dark has-bg-image" id="services" aria-label="servies"
                            style={{ backgroundImage: "url('./assets/images/classes-bg.png')" }}>
                            <p className="section-subtitle">Our Services</p>
                            <br />
                            <div className="container">
                                <ul className="class-list has-scrollbar">

                                    <li className="scrollbar-item">
                                        <div className="class-card">



                                            <div className="card-content">

                                                <div className="title-wrapper">

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Strength training</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Strength training is like sculpting a work of art, with your body as the canvas. Each lift, each rep, and each set is a brush stroke, shaping your muscles into a masterpiece.
                                                </p>



                                            </div>

                                        </div>
                                    </li>
                                    <li className="scrollbar-item">
                                        <div className="class-card">



                                            <div className="card-content">

                                                <div className="title-wrapper">


                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Weight loss/Gain training</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Weight loss and weight gain are like two sides of the same coin - both require dedication, hard work, and a little bit of fun! Whether you're looking to shed a few extra pounds or pack on some muscle, it's all about finding the right balance of nutrition, exercise, and mindset.
                                                </p>


                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="class-card">



                                            <div className="card-content">

                                                <div className="title-wrapper">


                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Steam room</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Steam room is like a magical portal to a world of relaxation and rejuvenation. It's a place where the stresses and worries of the outside world evaporate into a mist of tranquility.
                                                </p>


                                            </div>

                                        </div>
                                    </li>


                                </ul>

                            </div>
                            <div className="container">
                                <ul className="class-list has-scrollbar">

                                    <li className="scrollbar-item">
                                        <div className="class-card">


                                            <div className="card-content">

                                                <div className="title-wrapper">


                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Cardio</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Cardio is like a dance party for your heart! It's a fast-paced, heart-pumping workout that leaves you feeling energized and alive. It's like hitting the refresh button on your body and mind.
                                                </p>



                                            </div>

                                        </div>
                                    </li>
                                    <li className="scrollbar-item">
                                        <div className="class-card">



                                            <div className="card-content">

                                                <div className="title-wrapper">


                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Diet Counselling</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Diet counseling is like having a personal chef, nutritionist, and cheerleader all rolled into one! It's a journey of discovery, where you learn how to nourish your body and mind with the right foods and habits.
                                                </p>



                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="class-card">



                                            <div className="card-content">

                                                <div className="title-wrapper">


                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Cross Fit</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">




                                                    CrossFit is like a high-intensity, full-body carnival ride that leaves you feeling exhilarated and accomplished! It's a workout that combines functional movements, strength training, and cardiovascular conditioning, to give you a total-body workout that leaves you feeling stronger, fitter, and more confident than ever before.





                                                </p>


                                            </div>

                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </section>

                        <section className="section class bg-dark has-bg-image" id="class" aria-label="class"
                            style={{ backgroundImage: "url('./assets/images/classes-bg.png')" }}>
                            <div className="container">

                                <p className="section-subtitle">Our Classes</p>

                                <h2 className="h2 section-title text-center">Fitness Classes For Every Goal</h2>

                                <ul className="class-list has-scrollbar">

                                    <li className="scrollbar-item">
                                        <div className="class-card">

                                            <figure className="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={class1Image} width="416" height="240" loading="lazy" alt="Weight Lifting"
                                                    className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <div className="title-wrapper">
                                                    <img src={classIcon1Image} width="10rem" height="10rem" aria-hidden="true" alt="WL icon"
                                                        className="title-icon" />

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Zumba</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Shake, shimmy, and sweat with Zumba
                                                </p>

                                                <div className="card-progress">

                                                    <div className="progress-wrapper">
                                                        <p className="progress-label">Class Full</p>

                                                        <span className="progress-value">85%</span>
                                                    </div>

                                                    <div className="progress-bg">
                                                        <div className="progress-bar" style={{ width: 85 }}/>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>
                                    <li className="scrollbar-item">
                                        <div className="class-card">

                                            <figure className="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={class2Image} width="416" height="240" loading="lazy" alt="Weight Lifting"
                                                    className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <div className="title-wrapper">
                                                    <img src={classIcon2Image} width="10rem" height="10rem" aria-hidden="true" alt="WL icon"
                                                        className="title-icon" />

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Swimming</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Make a splash and feel alive with swimming
                                                </p>

                                                <div className="card-progress">

                                                    <div className="progress-wrapper">
                                                        <p className="progress-label">Class Full</p>

                                                        <span className="progress-value">85%</span>
                                                    </div>

                                                    <div className="progress-bg">
                                                        <div className="progress-bar" style={{ width: 85 }}/>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="class-card">

                                            <figure className="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={class3Image} width="416" height="240" loading="lazy" alt="Cardio & Strength"
                                                    className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <div className="title-wrapper">
                                                    <img src={classIcon3Image} width="52" height="52" aria-hidden="true" alt=""
                                                        className="title-icon" />

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Cycling</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Pedal your way to a happier and healthier you with cycling
                                                </p>

                                                <div className="card-progress">

                                                    <div className="progress-wrapper">
                                                        <p className="progress-label">Class Full</p>

                                                        <span className="progress-value">70%</span>
                                                    </div>

                                                    <div className="progress-bg">
                                                        <div className="progress-bar" style={{ width: 70 }}/>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="class-card">

                                            <figure className="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={class3Image} width="416" height="240" loading="lazy" alt="Power Yoga"
                                                    className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <div className="title-wrapper">
                                                    <img src={classIcon3Image} width="52" height="52" aria-hidden="true" alt=""
                                                        className="title-icon" />

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Power Yoga</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Breathe in the good, exhale the bad with yoga
                                                </p>

                                                <div className="card-progress">

                                                    <div className="progress-wrapper">
                                                        <p className="progress-label">Class Full</p>

                                                        <span className="progress-value">90%</span>
                                                    </div>

                                                    <div className="progress-bg">
                                                        <div className="progress-bar" style={{ width: 90 }}/>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="class-card">

                                            <figure className="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={class4} width="416" height="240" loading="lazy" alt="The Fitness Pack"
                                                    className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <div className="title-wrapper">
                                                    <img src={classIcon4} width="52" height="52" aria-hidden="true" alt=""
                                                        className="title-icon" />

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Strength training</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Train like a boss and feel like a champion with strength training
                                                </p>

                                                <div className="card-progress">

                                                    <div className="progress-wrapper">
                                                        <p className="progress-label">Class Full</p>

                                                        <span className="progress-value">60%</span>
                                                    </div>

                                                    <div className="progress-bg">
                                                        <div className="progress-bar" style={{ width: 60 }}/>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>
                                    <li className="scrollbar-item">
                                        <div className="class-card">

                                            <figure className="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={class2Image} width="416" height="240" loading="lazy" alt="Cardio & Strength"
                                                    className="img-cover" />
                                            </figure>

                                            <div className="card-content">

                                                <div className="title-wrapper">
                                                    <img src={classIcon2Image} width="52" height="52" aria-hidden="true" alt=""
                                                        className="title-icon" />

                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Fat burning</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    Slay those extra pounds and unleash your inner fire with fat burning
                                                </p>

                                                <div className="card-progress">

                                                    <div className="progress-wrapper">
                                                        <p className="progress-label">Class Full</p>

                                                        <span className="progress-value">70%</span>
                                                    </div>

                                                    <div className="progress-bg">
                                                        <div className="progress-bar" style={{ width: 70 }}/>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </section>

                        <section className="section class bg-dark has-bg-image" id="Subscription" aria-label="Subscription">
                            <div className="container" >

                                <p className="section-subtitle">Our Subscription</p>
                                <br />

                                <ul className="class-list has-scrollbar">

                                    <li className="scrollbar-item">
                                        <div className="class-card">



                                            <div className="card-content">

                                                <div className="title-wrapper-sub">


                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Silver Membership</a>
                                                        <a href="#" className="card-title"> price: 500</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    <ul>
                                                        <li>1 Month Plan</li>
                                                        <li>2 hours of excercises/day</li>
                                                        <li>1 Free consultaion with coaches</li>
                                                        <li>2 sessions for other activities</li>
                                                    </ul>
                                                </p>




                                            </div>

                                        </div>
                                    </li>
                                    <li className="scrollbar-item">
                                        <div className="class-card">



                                            <div className="card-content">

                                                <div className="title-wrapper-sub">


                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Gold Membership</a>
                                                        <a href="#" className="card-title"> price: 1200</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    <ul>
                                                        <li>3 Months Plan</li>
                                                        <li>3 hour of excercises/day</li>
                                                        <li>3 Free consultaion of Coaches & Nutritionist</li>
                                                        <li>10 sessions for other activities</li>
                                                    </ul>
                                                </p>



                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="class-card">
                                            <div className="card-content">

                                                <div className="title-wrapper-sub">


                                                    <h3 className="h3">
                                                        <a href="#" className="card-title">Platinum Membership</a>
                                                        <a href="#" className="card-title"> price: 2500</a>
                                                    </h3>
                                                </div>

                                                <p className="card-text">
                                                    <ul>
                                                        <li>6 Months Plan</li>
                                                        <li>3 hours of excercises</li>
                                                        <li>Consultation of Private Coach & Nutritionist</li>
                                                        <li>Coupons on Nutrition</li>
                                                        <li>Unlimited access to other activities</li>
                                                    </ul>

                                                </p>




                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section className="section blog" id="blog" aria-label="blog">
                            <div className="container">

                                <p className="section-subtitle">Our News</p>

                                <h2 className="h2 section-title text-center">Latest Blog Feed</h2>

                                <ul className="blog-list has-scrollbar">

                                    <li className="scrollbar-item">
                                        <div className="blog-card">

                                            <div className="card-banner img-holder" style={{ width: 440, height: 270 }}>
                                                <img src={blogImage1} width="440" height="270" loading="lazy"
                                                    alt="Going to the gym for the first time" className="img-cover" />

                                                <time className="card-meta" dateTime="2022-07-07">2 Jan 2023</time>
                                            </div>

                                            <div className="card-content">

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Pranav Reddy</a>
                                                </h3>

                                                <p className="card-text">
                                                    I've tried a lot of different fitness apps over the years, but this one stands out for its
                                                    comprehensive approach to health and wellness. In addition to the great workout plans,
                                                    the app also offers nutrition advice, progress tracking, and other features that help
                                                    me stay on top of my health and wellness goals.
                                                </p>

                                                <a href="#" className="btn-link has-before">Read More</a>

                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="blog-card">

                                            <div className="card-banner img-holder" style={{ width: 440, height: 270 }}>
                                                <img src={blogImage2} width="440" height="270" loading="lazy"
                                                    alt="Parturient accumsan cacus pulvinar magna" className="img-cover" />

                                                <time className="card-meta" dateTime="2022-07-07">5 Feb 2023</time>
                                            </div>

                                            <div className="card-content">

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Labhya Sreenivas</a>
                                                </h3>

                                                <p className="card-text">
                                                    I love how easy it is to use this fitness app. The intuitive interface and simple navigation make it
                                                    easy to find the workouts and exercises I need, and the clear instructions and recorded videos ensure
                                                    that I'm performing each exercise correctly.
                                                </p>

                                                <a href="#" className="btn-link has-before">Read More</a>

                                            </div>

                                        </div>
                                    </li>

                                    <li className="scrollbar-item">
                                        <div className="blog-card">

                                            <div className="card-banner img-holder" style={{ width: 440, height: 270 }}>
                                                <img src={blogImage3} width="440" height="270" loading="lazy"
                                                    alt="Risus purus namien parturient accumsan cacus" className="img-cover" />

                                                <time className="card-meta" dateTime="2022-07-07">11 March 2023</time>
                                            </div>

                                            <div className="card-content">

                                                <h3 className="h3">
                                                    <a href="#" className="card-title">Gaurav Kulkarni</a>
                                                </h3>

                                                <p className="card-text">
                                                    This fitness app is the perfect tool for anyone looking to stay active and healthy, regardless of
                                                    their fitness level. Whether you're a beginner or an experienced athlete, the app offers a wide range
                                                    of workouts and exercises that can be customized to meet your specific needs and goals.
                                                    The personalized trainings and motivational features have kept me motivated and on track and
                                                    I have significantly seen improvements in my strength and endurance.
                                                </p>

                                                <a href="#" className="btn-link has-before">Read More</a>

                                            </div>

                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </section>






                    </article>


                </main>

                <footer className="footer">

                    <div className="section footer-top bg-dark has-bg-image" style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}>
                        <div className="container">

                            <div className="footer-brand">

                                <a href="#" className="logo">

                                    <img src={Bomg} alt="BigCo Inc. logo" id="asasa" />
                                    <span className="span">NovaFit</span>

                                </a>

                                <p className="footer-brand-text"/>

                                

                                <div className="wrapper">
                                    <p style={{ color: "black" }}>Login as</p>
                                    <a href="/adminlogin" className="btn btn-secondary">Admin</a>
                                    <a href="/trainerlogin" className="btn btn-secondary">Trainer</a>
                                </div>

                            </div>

                            <ul className="footer-list">

                                <li>
                                    <p className="footer-list-title has-before">Our Links</p>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Home</a>
                                </li>

                                <li>
                                    <a href="#about" className="footer-link">About Us</a>
                                </li>

                                <li>
                                    <a href="#class" className="footer-link">Classes</a>
                                </li>

                                <li>
                                    <a href="#blog" className="footer-link">Blog</a>
                                </li>

                                <li>
                                    <a href="/contactus" className="footer-link">Contact Us</a>
                                </li>
                                <li>
                                <a href="http://localhost:7000/checkout">Checkout</a>
                                </li>
                                <li>
                                    <a href="/FAQ" className="footer-link">FAQ</a>
                                </li>

                            </ul>

                            <ul className="footer-list">

                                <li>
                                    <p className="footer-list-title has-before">Contact Us</p>
                                </li>

                                <li className="footer-list-item">


                                    <address className="address footer-link">
                                        1247/Plot No. 39, 15th Phase, Colony, Jayanagar, Bangalore
                                    </address>
                                </li>

                                <li className="footer-list-item">


                                    <div>
                                        <a href="tel:18001213637" className="footer-link">1800-121-3637</a>

                                        <a href="tel:+915552348765" className="footer-link">+91 555 234-8765</a>
                                    </div>
                                </li>

                                <li className="footer-list-item">


                                    <div>
                                        <a href="mailto:info@Novafit.com" className="footer-link">info@Novafit.com</a>

                                        <a href="mailto:services@Novafit.com" className="footer-link">services@Novafit.com</a>
                                    </div>
                                </li>

                            </ul>

                            <ul className="footer-list">

                                <li>
                                    <p className="footer-list-title has-before">Our Newsletter</p>
                                </li>

                                <li>
                                    <form action="" className="footer-form">
                                        <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required
                                            className="input-field" />

                                        <button type="submit" className="btn btn-primary" aria-label="Submit"/>

                                        
                                    </form>
                                </li>



                            </ul>

                        </div>
                    </div>

                    <div className="footer-bottom">
                        <div className="container">

                            <p className="copyright">
                                &copy; 2023 NovaFit. All Rights Reserved By <a href="#" className="copyright-link">Team Mavericks.</a>
                            </p>

                            <ul className="footer-bottom-list">

                                <li>
                                    <a href="#" className="footer-bottom-link has-before">Privacy Policy</a>
                                </li>

                                <li>
                                    <a href="#" className="footer-bottom-link has-before">Terms & Condition</a>
                                </li>

                            </ul>

                        </div>
                    </div>

                </footer>







                <a href="#top" className="back-top-btn" aria-label="back to top" data-back-top-btn>
                    <ion-icon name="caret-up-sharp" aria-hidden="true"/>
                </a>






                <script src="./assets/js/script.js" defer/>


                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"/>
                <script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"/>

            </body>

        </>
    )
}

export default Home1;