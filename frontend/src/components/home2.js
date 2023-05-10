import React from 'react'
import './home1.css'
import Bomg from "../assets/images/iconnova.png"
import booking from './booking';
//import services from '../components/services'


function home2() {
    return (
        <>
            <body id="top">


                <header class="header" data-header>
                    <div class="container">

                        <a href="#" class="logo">

                            <img src={Bomg} alt="BigCo Inc. logo" id="asasa" />
                            <span class="span">NovaFit</span>
                        </a>

                        <nav class="navbar" data-navbar>

                            <button class="nav-close-btn" aria-label="close menu" data-nav-toggler>
                                <ion-icon name="close-sharp" aria-hidden="true"></ion-icon>
                            </button>

                            <ul class="navbar-list">

                                <li>
                                    <a href="#home" class="navbar-link active" data-nav-link>Home</a>
                                </li>

                                <li>
                                    <a href="#about" class="navbar-link" data-nav-link>About Us</a>
                                </li>



                                <li>
                                    <a href="#services" class="navbar-link" data-nav-link>Services</a>
                                </li>

                                <li>
                                    <a href="#class" class="navbar-link" data-nav-link>Classes</a>
                                </li>

                                <li>
                                    <a href="/contactus" class="navbar-link" data-nav-link>Contact Us</a>
                                </li>

                                <li>
                                    <a href="#Subscription" class="navbar-link" data-nav-link>Subscription</a>
                                </li>

                                <li>
                                    <a href="/shop" class="navbar-link" data-nav-link>Shop</a>
                                </li>


                            </ul>

                        </nav>

                        <a href="/dashboard" class="btn btn-secondary">Profile</a>

                        <button class="nav-open-btn" aria-label="open menu" data-nav-toggler>
                            <span class="line"></span>
                            <span class="line"></span>
                            <span class="line"></span>
                        </button>

                    </div>
                </header>





                <main>
                    <article>

                        <section class="section hero bg-dark has-after has-bg-image" id="home" aria-label="hero" data-section
                            style={{ backgroundImage: "url('./assets/images/hero-bg.png')" }}>
                            <div class="container">

                                <div class="hero-content">

                                    <p class="hero-subtitle">
                                        <strong class="strong">The Best</strong>Fitness Club
                                    </p>

                                    <h1 class="h1 hero-title">Work Hard To Get Better Life</h1>





                                </div>

                                <div class="hero-banner">
                                    <img src={require('../assets/images/hero-banner.png')} width="800" height="753" alt="hero banner" class="w-100" />

                                    <img src={require('../assets/images/hero-circle-one.png')} width="666" height="666" aria-hidden="true" alt="hero circle one"
                                        class="circle circle-1" />
                                    <img src={require("../assets/images/hero-circle-two.png")} width="666" height="666" aria-hidden="true" alt=""
                                        class="circle circle-2" />


                                </div>
                            </div>
                        </section>
                        <section class="section about" id="about" aria-label="about">
                            <div class="container">
                                <div class="about-banner has-after">
                                    <img src={require('../assets/images/about-banner.png')} width="660" height="648" loading="lazy" alt="aboutbanner"
                                        class="w-100" />

                                    <img src={require('../assets/images/about-circle-one.png')} width="660" height="534" loading="lazy" aria-hidden="true"
                                        alt="" class="circle circle-1" />
                                    <img src={require('../assets/images/about-circle-two.png')} width="660" height="534" loading="lazy" aria-hidden="true"
                                        alt="" class="circle circle-2" />

                                    <img src={require('../assets/images/fitness.png')} width="650" height="154" loading="lazy" alt="fitness"
                                        class="abs-img w-100" />
                                </div>


                                <div class="about-content">

                                    <p class="section-subtitle">About Us</p>

                                    <h2 class="h2 section-title">Welcome To Our Fitness Gym</h2>

                                    <p class="section-text">
                                        Novafit is a fitness brand that promotes physical fitness, weight loss, healthy eating habits,
                                        stress reduction and improved overall well-being. The main goal of Novafit is to help users live
                                        a healthier lifestyle by providing support, guidance and encouragement to make positive changes
                                        in their daily routines.
                                    </p>

                                    <p class="section-text">
                                        Novafit has the best-in-class trainers and offers workouts ranging from yoga to boxing. Our workouts
                                        can be done at your nearest Novafit centres and at home with the help of our recorded videos.
                                        Novafit includes tracking and monitoring physical activity levels, provides customized workout plans,
                                        offers nutritional advice and meal planning and setting remainders to encourage users to stay on
                                        track with their goals.
                                    </p>

                                    <div class="wrapper">

                                        <div class="about-coach">

                                            <figure class="coach-avatar">
                                                <img src={require('../assets/images/about-coach.jpg')} width="65" height="65" loading="lazy" alt="Trainer" />
                                            </figure>

                                            <div>
                                                <h3 class="h3 coach-name">Kumar varun</h3>

                                                <p class="coach-title">Our Coach</p>
                                            </div>

                                        </div>

                                        <a href="#" class="btn btn-primary">Explore More</a>

                                    </div>

                                </div>
                            </div>
                        </section>




                        <section class="section video" aria-label="video">
                            <div class="container">

                                <div class="video-card has-before has-bg-image"
                                    style={{ backgroundImage: "url('./assets/images/video-banner.jpg')" }} >

                                    <h2 class="h2 card-title">Explore Fitness Life</h2>

                                    <button class="play-btn" aria-label="play video">
                                        <ion-icon name="play-sharp" aria-hidden="true"></ion-icon>
                                    </button>

                                    <a href="#" class="btn-link has-before">Watch More</a>

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

                        <section class="section class bg-dark has-bg-image" id="services" aria-label="servies"
                            style={{ backgroundImage: "url('./assets/images/classes-bg.png')" }}>
                            <p class="section-subtitle">Our Services</p>
                            <br />
                            <div class="container">
                                <ul class="class-list has-scrollbar">

                                    <li class="scrollbar-item">
                                        <div class="class-card">



                                            <div class="card-content">

                                                <div class="title-wrapper">

                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Strength training</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Strength training is like sculpting a work of art, with your body as the canvas. Each lift, each rep, and each set is a brush stroke, shaping your muscles into a masterpiece.
                                                </p>



                                            </div>

                                        </div>
                                    </li>
                                    <li class="scrollbar-item">
                                        <div class="class-card">



                                            <div class="card-content">

                                                <div class="title-wrapper">


                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Weight loss/Gain training</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Weight loss and weight gain are like two sides of the same coin - both require dedication, hard work, and a little bit of fun! Whether you're looking to shed a few extra pounds or pack on some muscle, it's all about finding the right balance of nutrition, exercise, and mindset.
                                                </p>


                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="class-card">



                                            <div class="card-content">

                                                <div class="title-wrapper">


                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Steam room</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Steam room is like a magical portal to a world of relaxation and rejuvenation. It's a place where the stresses and worries of the outside world evaporate into a mist of tranquility.
                                                </p>


                                            </div>

                                        </div>
                                    </li>


                                </ul>

                            </div>
                            <div class="container">
                                <ul class="class-list has-scrollbar">

                                    <li class="scrollbar-item">
                                        <div class="class-card">


                                            <div class="card-content">

                                                <div class="title-wrapper">


                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Cardio</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Cardio is like a dance party for your heart! It's a fast-paced, heart-pumping workout that leaves you feeling energized and alive. It's like hitting the refresh button on your body and mind.
                                                </p>



                                            </div>

                                        </div>
                                    </li>
                                    <li class="scrollbar-item">
                                        <div class="class-card">



                                            <div class="card-content">

                                                <div class="title-wrapper">


                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Diet Counselling</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Diet counseling is like having a personal chef, nutritionist, and cheerleader all rolled into one! It's a journey of discovery, where you learn how to nourish your body and mind with the right foods and habits.
                                                </p>


                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="class-card">



                                            <div class="card-content">

                                                <div class="title-wrapper">


                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Cross Fit</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">




                                                    CrossFit is like a high-intensity, full-body carnival ride that leaves you feeling exhilarated and accomplished! It's a workout that combines functional movements, strength training, and cardiovascular conditioning, to give you a total-body workout that leaves you feeling stronger, fitter, and more confident than ever before.





                                                </p>


                                            </div>

                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </section>

                        <section class="section class bg-dark has-bg-image" id="class" aria-label="class"
                            style={{ backgroundImage: "url('./assets/images/classes-bg.png')" }}>
                            <div class="container">

                                <p class="section-subtitle">Our Classes</p>

                                <h2 class="h2 section-title text-center">Fitness Classes For Every Goal</h2>

                                <ul class="class-list has-scrollbar">

                                    <li class="scrollbar-item">
                                        <div class="class-card">

                                            <figure class="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={require("../assets/images/class1.jpg")} width="416" height="240" loading="lazy" alt="Weight Lifting"
                                                    class="img-cover" />
                                            </figure>

                                            <div class="card-content">

                                                <div class="title-wrapper">
                                                    <img src={require("../assets/images/class-icon-1.png")} width="10rem" height="10rem" aria-hidden="true" alt="WL icon"
                                                        class="title-icon" />

                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Zumba</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Shake, shimmy, and sweat with Zumba
                                                </p>

                                                <div class="card-progress">

                                                    <div class="progress-wrapper">
                                                        <p class="progress-label">Class Full</p>

                                                        <span class="progress-value">85%</span>
                                                    </div>

                                                    <div class="progress-bg">
                                                        <div class="progress-bar" style={{ width: 85 }}></div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>
                                    <li class="scrollbar-item">
                                        <div class="class-card">

                                            <figure class="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={require("../assets/images/class2.jpg")} width="416" height="240" loading="lazy" alt="Weight Lifting"
                                                    class="img-cover" />
                                            </figure>

                                            <div class="card-content">

                                                <div class="title-wrapper">
                                                    <img src={require("../assets/images/class-icon-1.png")} width="10rem" height="10rem" aria-hidden="true" alt="WL icon"
                                                        class="title-icon" />

                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Swimming</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Make a splash and feel alive with swimming
                                                </p>

                                                <div class="card-progress">

                                                    <div class="progress-wrapper">
                                                        <p class="progress-label">Class Full</p>

                                                        <span class="progress-value">85%</span>
                                                    </div>

                                                    <div class="progress-bg">
                                                        <div class="progress-bar" style={{ width: 85 }}></div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="class-card">

                                            <figure class="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={require("../assets/images/class3.jpg")} width="416" height="240" loading="lazy" alt="Cardio & Strength"
                                                    class="img-cover" />
                                            </figure>

                                            <div class="card-content">

                                                <div class="title-wrapper">
                                                    <img src={require("../assets/images/class-icon-2.png")} width="52" height="52" aria-hidden="true" alt=""
                                                        class="title-icon" />

                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Cycling</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Pedal your way to a happier and healthier you with cycling
                                                </p>

                                                <div class="card-progress">

                                                    <div class="progress-wrapper">
                                                        <p class="progress-label">Class Full</p>

                                                        <span class="progress-value">70%</span>
                                                    </div>

                                                    <div class="progress-bg">
                                                        <div class="progress-bar" style={{ width: 70 }}></div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="class-card">

                                            <figure class="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={require("../assets/images/class-3.jpg")} width="416" height="240" loading="lazy" alt="Power Yoga"
                                                    class="img-cover" />
                                            </figure>

                                            <div class="card-content">

                                                <div class="title-wrapper">
                                                    <img src={require("../assets/images/class-icon-3.png")} width="52" height="52" aria-hidden="true" alt=""
                                                        class="title-icon" />

                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Power Yoga</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Breathe in the good, exhale the bad with yoga
                                                </p>

                                                <div class="card-progress">

                                                    <div class="progress-wrapper">
                                                        <p class="progress-label">Class Full</p>

                                                        <span class="progress-value">90%</span>
                                                    </div>

                                                    <div class="progress-bg">
                                                        <div class="progress-bar" style={{ width: 90 }}></div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="class-card">

                                            <figure class="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={require("../assets/images/class-4.jpg")} width="416" height="240" loading="lazy" alt="The Fitness Pack"
                                                    class="img-cover" />
                                            </figure>

                                            <div class="card-content">

                                                <div class="title-wrapper">
                                                    <img src={require("../assets/images/class-icon-4.png")} width="52" height="52" aria-hidden="true" alt=""
                                                        class="title-icon" />

                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Strength training</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Train like a boss and feel like a champion with strength training
                                                </p>

                                                <div class="card-progress">

                                                    <div class="progress-wrapper">
                                                        <p class="progress-label">Class Full</p>

                                                        <span class="progress-value">60%</span>
                                                    </div>

                                                    <div class="progress-bg">
                                                        <div class="progress-bar" style={{ width: 60 }}></div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>
                                    <li class="scrollbar-item">
                                        <div class="class-card">

                                            <figure class="card-banner img-holder" style={{ width: 416, height: 240 }}>
                                                <img src={require("../assets/images/class-2.jpg")} width="416" height="240" loading="lazy" alt="Cardio & Strength"
                                                    class="img-cover" />
                                            </figure>

                                            <div class="card-content">

                                                <div class="title-wrapper">
                                                    <img src={require("../assets/images/class-icon-2.png")} width="52" height="52" aria-hidden="true" alt=""
                                                        class="title-icon" />

                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Fat burning</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    Slay those extra pounds and unleash your inner fire with fat burning
                                                </p>

                                                <div class="card-progress">

                                                    <div class="progress-wrapper">
                                                        <p class="progress-label">Class Full</p>

                                                        <span class="progress-value">70%</span>
                                                    </div>

                                                    <div class="progress-bg">
                                                        <div class="progress-bar" style={{ width: 70 }}></div>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                    </li>

                                </ul>

                            </div>

                        </section>
                        <section class="section class bg-dark has-bg-image" id="Subscription" aria-label="Subscription">
                            <div class="container" style={{ inline: "auto" }}>
                                <a href="/booking" class="btn btn-secondary">BOOK A SESSION</a>
                            </div>
                        </section>



                        <section class="section class bg-dark has-bg-image" id="Subscription" aria-label="Subscription">
                            <div class="container" >

                                <p class="section-subtitle">Our Subscription</p>
                                <br />

                                <ul class="class-list has-scrollbar">

                                    <li class="scrollbar-item">
                                        <div class="class-card">



                                            <div class="card-content">

                                                <div class="title-wrapper-sub">


                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Silver Membership</a>
                                                        <a href="#" class="card-title"> price: 500</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    <ul>
                                                        <li>1 Month Plan</li>
                                                        <li>2 hours of excercises/day</li>
                                                        <li>1 Free consultaion with coaches</li>
                                                        <li>2 sessions for other activities</li>
                                                    </ul>
                                                </p>

                                                <a href="/booking" class="btn btn-secondary">BUY NOW</a>


                                            </div>

                                        </div>
                                    </li>
                                    <li class="scrollbar-item">
                                        <div class="class-card">



                                            <div class="card-content">

                                                <div class="title-wrapper-sub">


                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Gold Membership</a>
                                                        <a href="#" class="card-title"> price: 1200</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    <ul>
                                                        <li>3 Months Plan</li>
                                                        <li>3 hour of excercises/day</li>
                                                        <li>3 Free consultaion of Coaches & Nutritionist</li>
                                                        <li>10 sessions for other activities</li>
                                                    </ul>
                                                </p>

                                                <a href="/payment" class="btn btn-secondary">BUY NOW</a>

                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="class-card">
                                            <div class="card-content">

                                                <div class="title-wrapper-sub">


                                                    <h3 class="h3">
                                                        <a href="#" class="card-title">Platinum Membership</a>
                                                        <a href="#" class="card-title"> price: 2500</a>
                                                    </h3>
                                                </div>

                                                <p class="card-text">
                                                    <ul>
                                                        <li>6 Months Plan</li>
                                                        <li>3 hours of excercises</li>
                                                        <li>Consultation of Private Coach & Nutritionist</li>
                                                        <li>Coupons on Nutrition</li>
                                                        <li>Unlimited access to other activities</li>
                                                    </ul>

                                                </p>
                                                <a href="/payment" class="btn btn-secondary">BUY NOW</a>



                                            </div>

                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section class="section blog" id="blog" aria-label="blog">
                            <div class="container">

                                <p class="section-subtitle">Our News</p>

                                <h2 class="h2 section-title text-center">Latest Blog Feed</h2>

                                <ul class="blog-list has-scrollbar">

                                    <li class="scrollbar-item">
                                        <div class="blog-card">

                                            <div class="card-banner img-holder" style={{ width: 440, height: 270 }}>
                                                <img src={require("../assets/images/blog-1.jpg")} width="440" height="270" loading="lazy"
                                                    alt="Going to the gym for the first time" class="img-cover" />

                                                <time class="card-meta" datetime="2022-07-07">2 Jan 2023</time>
                                            </div>

                                            <div class="card-content">

                                                <h3 class="h3">
                                                    <a href="#" class="card-title">Pranav Reddy</a>
                                                </h3>

                                                <p class="card-text">
                                                    I've tried a lot of different fitness apps over the years, but this one stands out for its
                                                    comprehensive approach to health and wellness. In addition to the great workout plans,
                                                    the app also offers nutrition advice, progress tracking, and other features that help
                                                    me stay on top of my health and wellness goals.
                                                </p>

                                                <a href="#" class="btn-link has-before">Read More</a>

                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="blog-card">

                                            <div class="card-banner img-holder" style={{ width: 440, height: 270 }}>
                                                <img src={require("../assets/images/blog-2.jpg")} width="440" height="270" loading="lazy"
                                                    alt="Parturient accumsan cacus pulvinar magna" class="img-cover" />

                                                <time class="card-meta" datetime="2022-07-07">5 Feb 2023</time>
                                            </div>

                                            <div class="card-content">

                                                <h3 class="h3">
                                                    <a href="#" class="card-title">Labhya Sreenivas</a>
                                                </h3>

                                                <p class="card-text">
                                                    I love how easy it is to use this fitness app. The intuitive interface and simple navigation make it
                                                    easy to find the workouts and exercises I need, and the clear instructions and recorded videos ensure
                                                    that I'm performing each exercise correctly.
                                                </p>

                                                <a href="#" class="btn-link has-before">Read More</a>

                                            </div>

                                        </div>
                                    </li>

                                    <li class="scrollbar-item">
                                        <div class="blog-card">

                                            <div class="card-banner img-holder" style={{ width: 440, height: 270 }}>
                                                <img src={require("../assets/images/blog-3.jpg")} width="440" height="270" loading="lazy"
                                                    alt="Risus purus namien parturient accumsan cacus" class="img-cover" />

                                                <time class="card-meta" datetime="2022-07-07">11 March 2023</time>
                                            </div>

                                            <div class="card-content">

                                                <h3 class="h3">
                                                    <a href="#" class="card-title">Gaurav Kulkarni</a>
                                                </h3>

                                                <p class="card-text">
                                                    This fitness app is the perfect tool for anyone looking to stay active and healthy, regardless of
                                                    their fitness level. Whether you're a beginner or an experienced athlete, the app offers a wide range
                                                    of workouts and exercises that can be customized to meet your specific needs and goals.
                                                    The personalized trainings and motivational features have kept me motivated and on track and
                                                    I have significantly seen improvements in my strength and endurance.
                                                </p>

                                                <a href="#" class="btn-link has-before">Read More</a>

                                            </div>

                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </section>






                    </article>


                </main>

                <footer class="footer">

                    <div class="section footer-top bg-dark has-bg-image" style={{ backgroundImage: "url('./assets/images/footer-bg.png')" }}>
                        <div class="container">

                            <div class="footer-brand">

                                <a href="#" class="logo">
                                    <img src={Bomg} alt="BigCo Inc. logo" id="asasa" />

                                    <span class="span">NovaFit</span>
                                </a>

                                <p class="footer-brand-text">

                                </p>

                                <div class="wrapper">



                                    <a href="/https://charts.mongodb.com/charts-project-0-wprxx/public/dashboards/6450e4be-3595-4bb7-8e83-288029f1c282" class="btn btn-secondary">Admin</a>



                                </div>

                            </div>

                            <ul class="footer-list">

                                <li>
                                    <p class="footer-list-title has-before">Our Links</p>
                                </li>

                                <li>
                                    <a href="#" class="footer-link">Home</a>
                                </li>

                                <li>
                                    <a href="#about" class="footer-link">About Us</a>
                                </li>

                                <li>
                                    <a href="#class" class="footer-link">Classes</a>
                                </li>

                                <li>
                                    <a href="#blog" class="footer-link">Blog</a>
                                </li>

                                <li>
                                    <a href="/contactus" class="footer-link">Contact Us</a>
                                </li>

                            </ul>

                            <ul class="footer-list">

                                <li>
                                    <p class="footer-list-title has-before">Contact Us</p>
                                </li>

                                <li class="footer-list-item">


                                    <address class="address footer-link">
                                        1247/Plot No. 39, 15th Phase, Colony, Jayanagar, Bangalore
                                    </address>
                                </li>

                                <li class="footer-list-item">


                                    <div>
                                        <a href="tel:18001213637" class="footer-link">1800-121-3637</a>

                                        <a href="tel:+915552348765" class="footer-link">+91 555 234-8765</a>
                                    </div>
                                </li>

                                <li class="footer-list-item">


                                    <div>
                                        <a href="mailto:info@Novafit.com" class="footer-link">info@Novafit.com</a>

                                        <a href="mailto:services@Novafit.com" class="footer-link">services@Novafit.com</a>
                                    </div>
                                </li>

                            </ul>

                            <ul class="footer-list">

                                <li>
                                    <p class="footer-list-title has-before">Our Newsletter</p>
                                </li>

                                <li>
                                    <form action="" class="footer-form">
                                        <input type="email" name="email_address" aria-label="email" placeholder="Email Address" required
                                            class="input-field" />

                                        <button type="submit" class="btn btn-primary" aria-label="Submit">

                                        </button>
                                    </form>
                                </li>


                            </ul>

                        </div>
                    </div>

                    <div class="footer-bottom">
                        <div class="container">

                            <p class="copyright">
                                &copy; 2023 NovaFit. All Rights Reserved By <a href="#" class="copyright-link">Team Mavericks.</a>
                            </p>

                            <ul class="footer-bottom-list">

                                <li>
                                    <a href="#" class="footer-bottom-link has-before">Privacy Policy</a>
                                </li>

                                <li>
                                    <a href="#" class="footer-bottom-link has-before">Terms & Condition</a>
                                </li>

                            </ul>

                        </div>
                    </div>

                </footer>







                <a href="#top" class="back-top-btn" aria-label="back to top" data-back-top-btn>
                    <ion-icon name="caret-up-sharp" aria-hidden="true"></ion-icon>
                </a>






                <script src="./assets/js/script.js" defer></script>


                <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
                <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

            </body>

        </>
    )
}

export default home2;