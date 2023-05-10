import React from 'react'


import './sessions.css'

function services() {
    return (
        <div>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Our Services</title>
            <div className="container">
                <h2>Our Services</h2>
                <section className="services">
                    <div className="card">
                        <div className="content">
                            <div className="icon"><i className="fa fa-code" /></div>
                            <div className="title">Cardio</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="icon"><i className="fa fa-mobile" /></div>
                            <div className="title">Flexibility</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="icon"><i className="fa fa-paint-brush" /></div>
                            <div className="title">Weight loss </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="icon"><i className="fa fa-laptop" /></div>
                            <div className="title">Weight gain</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="icon"><i className="fa fa-line-chart" /></div>
                            <div className="title">Steam room </div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="content">
                            <div className="icon"><i className="fa fa-wordpress" /></div>
                            <div className="title">Diet Counselling</div>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, reprehenderit.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    );
}

export default services;
