
import React, {useState, useEffect} from 'react';
import "../css/Payment.css";
import { useStateValue } from '../StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import {Link } from "react-router-dom";
import {CardElement , useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "../Reducer";
import axios from "../axios";
import {useHistory} from "react-router-dom";

const Payment=()=> {
const [{basket, user}, dispatch] = useStateValue();
const stripe = useStripe();
const elements = useElements();
const [error, setError] = useState(null);
const [disabled, setDisabled] = useState(true);
const [proccessing , setProccessing] = useState("");
const [succeeded , setSucceeded] = useState(false);
const [clientSecret , setClientSecret] = useState(true);

const history = useHistory();
useEffect(()=>{
  //generate the specil stripe secret which is allows us to charge a customer
  const getClientSecret = async ()=>{
  const response = await axios({
    method:'post',
    //stripe expects  the total in a currencies subunit
    url:`http://localhost:3000/payments/create?total=${getBasketTotal(basket)*100}`
    });
    setClientSecret(response.data.clientSecret)
    }
   getClientSecret()
},[basket])

const handleSubmit =async (e)=>{
  // Stripe stuff
  e.preventDefault();
  setProccessing(true);
  window.location.href = `http://${window.location.host}/`
  // const payload = await stripe.confirmCardPayment(clientSecret, {
  //   payment__method:{
  //     card:elements.getElement(CardElement)
  //   }
  // }).then(({paymentIntent})=>{
  //    //paymentIntent= payment confirmation
  //    setSucceeded(true);
  //    setError(null)
  //    setProccessing(false)

  //    history.replaceState('/orders')
  // })
}
const handleChange =(e)=>{
    //Listen for the change in the cardelement
    //and display any error as the customer types their card details
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
}
const handleBuyNow = () =>{
  window.location.replace(`${window.location.host}/`)
}

    return (
        <div className="payment">
            <div className="payment__container">
              <h1>
                Checkout(<Link to="/checkout">
                  {basket?.length} Items
                  </Link>)
              </h1>
                 {/* Payment section delivery address */}
                   <div className="payment__section">
                    <div className="payment__title">
                      <h3>Delivey Address</h3>
                    </div>
                    <div className="payment__address">
                        <p>{user?.email}</p>
                        <p>123 React lane</p>
                        <p>Los Angles, CA</p>
                    </div>
                   </div>

                 {/* Payment section review items */}
                 <div className="payment__section">
                      <div className="payment__title">
                         <h3>Review items and delivery</h3>
                      </div>
                      <div className="payment__items">
                        {basket.map((item, index)=>(                          
                            <CheckoutProduct
                            key={index}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                       ))} 
                      </div>
                   </div>
                  {/* Payment section payment method */}
                  <div className="payment__section">
                    <div className="payment__details">
                    <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                          {/*  Stripe....... */}
                          <form onSubmit={handleSubmit}>
                            <CardElement
                            onChange={handleChange}/>
                            <div className="payment__priceContainer">
                            <CurrencyFormat 
                              renderText = {(value) => (
                               <h3>
                                 Order Total: {value}
                              </h3>
                            )}
                            value={getBasketTotal(basket)} 
                            displayType={'text'} 
                             thousandSeparator={true} 
                             prefix={'$'} 
                              />  
                              {/* <Link to="/"> */}
                              <button on> 
                               Buy Now
                              </button> 
                              {/* </Link> */}
                            </div> 
                            {/* error..... */}
                            {error && <div>{error}</div>}
                          </form>
                    </div>
                   </div>
            </div>
        </div>
    )
}

export default Payment
