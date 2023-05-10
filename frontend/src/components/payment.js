import React from "react"
import './payment.css'
function payment() {
    return (
        <div>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>Responsive Payment getway form design in Hindi</title>
            <link rel="stylesheet" type="text/css" href="payment.css" />
            <header>
                <div className="container">


                    <h3>PAYMENT</h3>
                    <form>
                        Accepted Card <br />
                        <img src="image/card1.png" width={100} />
                        <img src="image/card2.png" width={50} />
                        <br /><br />
                        Credit card number
                        <input type="text" name placeholder="Enter card number" />
                        Exp month
                        <input type="text" name placeholder="Enter Month" />
                        <div id="zip">
                            <label>
                                Exp year
                                <select>
                                    <option>Choose Year..</option>
                                    <option>2022</option>
                                    <option>2023</option>
                                    <option>2024</option>
                                    <option>2025</option>
                                </select>
                            </label>
                            <label>
                                CVV
                                <input type="number" name placeholder="CVV" />
                            </label>
                        </div>
                    </form>
                    <input type="submit" name defaultValue="Proceed to Checkout" />

                </div>
            </header>
        </div>


    );
}
export default payment;
