import React from "react"
import './booking.css'
function booking() {
    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div className="formbold-mb-5">
                        <label htmlFor="phone" className="formbold-form-label"> Full Name </label>
                        <input type="text" name="phone" id="phone" placeholder="Enter your full name"
                            className="formbold-form-input" />
                    </div>


                    <div className="formbold-mb-5">
                        <label htmlFor="email" className="formbold-form-label"> Email Address </label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" className="formbold-form-input" />
                    </div>
                    <div className="formbold-mb-5" style={{ color: "black" }} >
                        <div>
                            <label htmlFor="Sessions">Choose a session:</label>
                            <select name="sessions" id="sessions">
                                <option value="Zumba">Zumba</option>
                                <option value="swimming">Swimming</option>
                                <option value="Power yoga">Power Yoga</option>
                                <option value="Strength training">Strength training</option>
                                <option value="Cycling">Cycling</option>
                                <option value="Fat burning">Fat burning</option>
                            </select>
                        </div>

                    </div>
                    <div className="formbold-mb-5" style={{ color: "black" }}>
                        <div>
                            <label htmlFor="Slot">Choose a slot:</label>
                            <select name="slot" id="slot">
                                <option value="time">7:00Am - 9:00Am</option>
                                <option value="time">11:00Am - 1:00Pm</option>
                                <option value="time">3:00Pm - 5:00Pm</option>
                                <option value="time">6:00Pm - 8:00Pm</option>
                            </select>
                        </div>

                    </div>
                    <div className="flex flex-wrap formbold--mx-3">
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5 w-full">
                                <label htmlFor="date" className="formbold-form-label"> Date </label>
                                <input type="date" name="date" id="date" className="formbold-form-input" />
                            </div>
                        </div>

                    </div>
                    <div className="formbold-mb-5 formbold-pt-3">
                        <label className="formbold-form-label formbold-form-label-2">
                            Address Details
                        </label>
                        <div className="flex flex-wrap formbold--mx-3">
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                    <input type="text" name="area" id="area" placeholder="Enter area" className="formbold-form-input" />
                                </div>
                            </div>
                            <div className="w-full sm:w-half formbold-px-3">
                                <div className="formbold-mb-5">
                                    <input type="text" name="city" id="city" placeholder="Enter city" className="formbold-form-input" />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div>
                        <button className="formbold-btn">Book Sessions</button>
                    </div>
                </form>
            </div>
        </div>
    );

}
export default booking;