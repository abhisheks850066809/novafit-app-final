// import React ,{useEffect}from 'react';
// const Razorpay = require("razorpay");


// const Checkout = ({ order_id }) => {
//   const razorpay = new Razorpay({
//     key: 'rzp_test_YlxTdTGYq82Ceb',
//   });

//   useEffect(() => {
//     const getEl = document.getElementById.bind(document);
//     const formatter = Razorpay.setFormatter(getEl('parent-form'));
//     const cvvField = getEl('card_cvv');

//     formatter
//       .add('card', getEl('card_number'))
//       .on('network', function(o) {
//         const type = this.type; // e.g. 'visa'

//         // set length of cvv element based on amex card
//         const cvvlen = type === 'amex' ? 4 : 3;
//         cvvField.maxLength = cvvlen;
//         cvvField.pattern = '^[0-9]{' + cvvlen + '}$';

//         getEl('card_type').innerHTML = type;
//       })
//       .on('change', function() {
//         const isValid = this.isValid();
//         getEl('card_valid').innerHTML = isValid ? 'valid' : 'invalid';

//         // automatically focus next field if card number is valid and filled
//         if (isValid && this.el.value.length === this.caretPosition) {
//           getEl('card_expiry').focus();
//         }
//       });

//     formatter
//       .add('expiry', getEl('card_expiry'))
//       .on('change', function() {
//         const isValid = this.isValid();
//         getEl('expiry_valid').innerHTML = isValid ? 'valid' : 'invalid';

//         // automatically focus next field if card number is valid and filled
//         if (isValid && this.el.value.length === this.caretPosition) {
//           getEl('card_cvv').focus();
//         }
//       });
//   }, []);

//   function pay() {
//     // has to be placed within user initiated context, such as click, in order for popup to open.
//     const data = {
//       amount: '<%= amount %>', // in currency subunits. Here 1000 = 1000 paise, which equals to ₹10
//       currency: 'INR', // Default is INR. We support more than 90 currencies.
//       email: 'example@example.com',
//       contact: '9123456780',

//       notes: {
//         address: 'Ground Floor, SJR Cyber, Laskar Hosur Road, Bengaluru',
//       },
//       order_id: '<%= order_id %>', // Replace with Order ID generated in Step 4
//       method: 'card',
//       card: {
//         number: $("#card_number").val(),
//         name: $("#name").val(),
//         expiry_month: parseInt($('#card_expiry').val().split('/')[0]),
//         expiry_year: parseInt($('#card_expiry').val().split('/')[1]),
//         cvv: $("#card_cvv").val(),
//       },
//       handler: function(response) {
//         // const json =response.json()
//         // if(json.success)
//         // {
//         //   nevigate("/")
//         // }
//         console.log(response);
//       },
//     };

//     razorpay.createPayment(data);
//   }

//   return (
//     <div className="container p-0">
//       <div className="card px-4">
//         <input type="hidden" name="order_id" value={order_id} />
//         <p className="h8 py-3">Payment Details</p>
//         <form id="parent-form">
//           <div className="col-12">
//             <p className="text mb-1">Plan</p>
//             <select className="form-control mb-3" name="plan" id="plan" required>
//               <option value="">Select Plan</option>
//               <option value="silver">Silver - Rs. 500</option>
//               <option value="gold">Gold - Rs. 1200</option>
//               <option value="platinum">Platinum - Rs. 2500</option>
//             </select>
//           </div>
//           <div className="col-12">
//             <div className="row gx-3">
//               <div className="d-flex flex-column">
//                 <p className="text mb-1">Person Name</p>
//                 <input
//                   className="form-control mb-3"
//                   type="text"
//                   placeholder="Enter Your Name"
//                   id="name"
//                   name="name"
//                   value=""
//                 />
//               </div>
//             </div>
//             <div className="col-12">
//               <div className="d-flex flex-column">
//                 <p className="text mb-1">Card Number</p>
//                 <input
//                   className="form-control mb-3"
//                   id="card_number"
//                   type="text"
//                   placeholder="1234 5678 435678"
//                   name="card_number"
//                   value="4111 1111 1111 1111"
//                 />
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="d-flex flex-column">
//                 <p className="text mb-1">Expiry</p>
//                 <input
//                   className="form-control mb-3"
//                   id="card_expiry"
//                   type="text"
//                   placeholder="MM/YY"
//                   name="card_expiry"
//                 />
//               </div>
//             </div>
//             <div className="col-6">
//               <div className="d-flex flex-column">
//                 <p className="text mb-1">CVV/CVC</p>
//                 <input
//                   className="form-control mb-3 pt-2"
//                   id="card_cvv"
//                   type="password"
//                   placeholder="***"
//                   name="card_cvv"
//                 />
//               </div>
//             </div>
//             <div className="col-12">
//               <input
//                 type="button"
//                 value="Pay"
//                 name="amount"
//                 className="btn btn-primary mb-3"
//                 onClick={pay}
//               />
//             </div>
//           </div>
//           </form>
//         </div>
//       </div>
  
//   );
// };

// export default Checkout;
