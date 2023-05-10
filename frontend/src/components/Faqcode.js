import FAQ from '../components/Faq';
import './Faq.css'

import React, { useState } from 'react';
function Faq() {
    const [faqs, setfaqs] = useState([
        {
            question: 'Why train with us?',
            answer: <p>
                <ul>
                    <li>Novafit has the best-in-class trainers and offers workouts ranging from yoga to boxing.</li>

                    <li> Our workouts can be done at your nearest Novafit centres and at home with the help of our recorded videos. </li>

                    <li>Novafit includes tracking and monitoring physical activity levels, provides

                        <ul>
                            <li>Customized workout plans</li>
                            <li>Offers nutritional advice</li>
                            <li>Meal planning and setting remainders</li>
                        </ul>

                        <li>to encourage users to stay on track with their goals</li>
                    </li>
                </ul>


            </p>,
            open: true


        },
        {
            question: 'How to train with us? ',
            answer:
                <ul>
                    <li>Set up your account that involves creating a username and password, entering your personal information and connecting the app to any fitness tracking devices you may have.</li>
                    <br />
                    <li>Set your goals such as weight loss, muscle gain , strength and conditioning. Be specific about what you want to achieve and the timeline you have in mind.</li>
                    <br />
                    <li>Create a workout plan based on your goals including cardio, strength training and flexibility exercises.</li>
                    <br />
                    <li>You can use the app to track your progress and to get guidance for the diet plans that you can follow for better results.</li>

                </ul>,
            open: false
        },
        {
            question: 'How to shop with us?',
            answer:
                <ul>
                    <li>
                        Novafit offers the option to shop for products related to fitness, such as workout gear, supplements and healthy food.
                    </li>
                    <br />
                    <ol>
                        <li>Browse the marketplace to see what products are available.</li>
                        <br />
                        <li>Use the search function to find specific products.</li>
                        <br />
                        <li>Read the product descriptions and reviews, before purchasing to get an idea of what to expect from the product and whether it's a good fit for your needs.</li>
                        <br />
                        <li>Check for promotions and discounts on products in their marketplace before making a purchase.</li>
                        <br />
                        <li>Add products to your cart, specifying the size or quantity.</li>
                        <br />
                        <li>When you are ready to check out, follow the app's instructions to complete your purchase which involves entering your payment information and shipping address.</li>
                        <br />
                        <li>You can then track your order using the tracking number provided to ensure that your order arrives on time and as expected.</li>

                    </ol>
                </ul>,


            open: false

        },
        {
            question: 'Payment',
            answer:
                <ul>
                    <li>Q:What payment methods are accepted in the fitness app?</li>
                    <li>A: Accepted payment methods are credit cards, such as Visa, Mastercard and American Express, as well as Paypal,Bank transfer and COD.</li>
                    <br />
                    <li>Q:Is it safe to enter my payment information in Novafit?</li>
                    <li>A:Security is guaranteed by protecting the credit card transactions by the latest version of SSL protocol.</li>
                    <br />
                    <li>Q:How do I update my payment information ?</li>
                    <li>A: To update your payment information, go to your account settings in the app and look for 'Payment'or 'billing' section and update your information following the instructions prompted.</li>
                    <br />
                    <li>Q:Can I cancel my subscription ?</li>
                    <li>A: Yes, you can cancel your subscription at any time in the app's settings. Look for the "Subscriptions" section to manage your subscription.</li>
                    <br />
                    <li>Q:Will I be charged automatically for my subscription ?</li>
                    <li>A: Yes you will be charged for your payment method automatically when your subscription renews, unless you cancel it before the renewal date.</li>
                    <br />
                    <li>Q:How do I contact customer support for payment-related issues ?</li>
                    <li>A: Look for the customer support contact information in the app's settings or on the app's website. You may be able to contact support via email, phone, or live chat.</li>
                    <br />
                    <li>Q:Can I get a refund for my subscription?</li>
                    <li>A: Novafit does not have any Refund/Return Policy.</li>
                </ul>,

            open: false

        },
        {
            question: 'Technical Help',
            answer:
                <ol>
                    <li>Q: How do I change my username or password in Novafit?</li>
                    <li>A: Look for the "Account" or "Settings" section and follow the instructions to change your username or password.</li>
                    <br />
                    <li>Q: How do I delete my account in Novafit?</li>
                    <li>A: Look for the "Account" or "Settings" section and follow the instructions to delete your account. Be aware that deleting your account will delete all of your data and cannot be undone.</li>
                    <br />
                    <li>Q: How do I recover my account ?</li>
                    <li>A: Look for the "Forgot Password" or "Account Recovery" option in the login screen. Follow the instructions to recover your account.</li>
                    <br />
                    <li>Q: How do I contact technical support for Novafit?</li>
                    <li>A: Look for the customer support contact information in the app's settings or on the app's website. You may be able to contact support via email, phone, or live chat.</li>
                </ol>,
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false;
            }

            return faq;
        }))
    }


    return (
        <div className="App">
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
                ))}
            </div>
        </div>
    );
}

export default Faq;
