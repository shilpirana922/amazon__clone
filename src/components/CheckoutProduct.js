import React from 'react';
import StarIcon from "@material-ui/icons/Star";
import {useStateValue} from "../StateProvider";
import "../css/CheckoutProduct.css"

const CheckoutProduct=({id, image,title,price, rating})=> {

    console.log(title)
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket =()=>{
        //remove the item from basket
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id
        })
    }
 
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image"
             src={image}/>
             <div className="checkoutProduct__info">
                 <p className="CheckoutProduct__title">{title}</p>
                 <p className="CheckoutProduct__price">
                     <small>$</small>
                     <strong>{price}</strong>
                 </p>
                <div className="CheckoutProduct__rating">
                    {
                        Array(rating).fill()
                        .map((_,i)=>(
                            <p><StarIcon/></p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket} >Remove from Basket</button>
             </div>
        </div>
    )
}

export default CheckoutProduct
