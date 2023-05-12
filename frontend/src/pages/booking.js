import React from "react"
import './styles/booking.css'

function booking() {

    const bookSession = async (e) => {
        e.preventDefault();
    
        // Get form data
        const form = e.target;
        const formData = new FormData(form);

       
            //   const jsonData = {};
            //   for (const [key, value] of formData.entries()) {
            //     jsonData[key] = value;
            //       }
            const jsonData = {};
formData.forEach((value, key) => {
  jsonData[key] = value;
});


    
        // Get token from localStorage

        // Make POST request to API
        const response = await fetch('http://localhost:7000/api/sessions/booksession', {
          method: 'POST',
          mode : "cors",
          headers: {
            'content-type':'application/json',
             "auth-token": localStorage.getItem('token')
    
          },
          body: JSON.stringify(jsonData)
        });
      const json=await response.json();
      alert(json.message);
        }


    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <br/>
                <br/>
                <br/> <br/> <br/> <br/>
                <form  onSubmit={bookSession}>
                  

                    
                    <div className="formbold-mb-5" style={{ color: "black" }} >
                        <div>
                            <label htmlFor="Sessions">Choose a session:
                            <select name="activity" id="sessions">
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
                    <div className="formbold-mb-5" style={{ color: "black" }}>
                        <div>
                            <label htmlFor="Slot">Choose a slot:
                            <select name="slot" id="slot">
                                <option value="7:00Am - 9:00Am">7:00Am - 9:00Am</option>
                                <option value="11:00Am - 1:00Pm">11:00Am - 1:00Pm</option>
                                <option value="3:00Pm - 5:00Pm">3:00Pm - 5:00Pm</option>
                                <option value="6:00Pm - 8:00Pm">6:00Pm - 8:00Pm</option>
                            </select>
                            </label>
                        </div>

                    </div>
                    <div className="flex flex-wrap formbold--mx-3">
                        <div className="w-full sm:w-half formbold-px-3">
                            <div className="formbold-mb-5 w-full">
                                <label htmlFor="date" className="formbold-form-label"> Date 
                                <input type="date" name="date" id="date" className="formbold-form-input" />
                                </label>
                            </div>
                        </div>

                    </div>
                    {/* <div className="formbold-mb-5 formbold-pt-3">
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
                    </div> */}
                    <div>
                        <button className="formbold-btn">Book Sessions</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default booking;