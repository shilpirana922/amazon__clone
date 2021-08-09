import React from 'react';
import "../css/Checkout.css";
import Subtotal from "./Subtotal"
import CheckoutProduct from "./CheckoutProduct";
import {useStateValue} from "../StateProvider";
const Checkout=()=> {
    const [{basket, user}, dispatch] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
              <img className="checkout__ad" 
              src="https://images-na.ssl-images-amazon.com/images/G/01/credit/img16/CCMP/newstorefront/YACC-desktop-nonprime-banner3.png "
              alt=""/>
              <h3>Hello,{user?.email}</h3>
              {basket.length ? 
              <div>
               <h2 className="checkout__title">Your Shopping Basket</h2>
               {basket.map(item=>(
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
               ))}
               </div>
               : <h1>Your Basket is empty</h1>
            }
             
              {/* checkout Product */}
            </div>
            <div className="checkout__right">
                <Subtotal/>
            </div>
        </div>
    )
}

export default Checkout
