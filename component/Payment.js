import React, { useState, useEffect } from "react";


import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "./axios";

function Payment() {
 
  
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);
  
  //////////////////////////////
//   useEffect(() => {
//     const getClientSecret = async () => {
//       const response = await axios({
//         method: "post",
//         // Stripe expects the total in a currencies subunits
//         url: `/payments/create?total=${1000 * 100}`,
//       });
//       setClientSecret(response.data.clientSecret);
//     };
    

//     getClientSecret();
//     // generate the special stripe secret which allows us to charge a customer

//   }, []);

//   console.log(clientSecret)

  ////////////////////////////

  const handleSubmit = async (event) => {
    // do all the fancy stripe stuff...
   
  
    event.preventDefault();
    setProcessing(true);
    // console.log("THE SECRET IS >>>", clientSecret);
    const payload = await stripe.confirmCardPayment('pi_3LQ2LuFpQdKr0M8B1t74yLSx_secret_7dGi5YavzPezSCwPi8dw6pENH', {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    setSucceeded(true);
    setError(null);
    setProcessing(false);
    console.log("don!");
  };
  
  const handleChange = (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        {/* Payment section - Payment method */}
  
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic will go */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment__priceContainer">
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>

              {/* Errors */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
