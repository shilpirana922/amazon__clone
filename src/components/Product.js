import React from 'react'
import "../css/Product.css";
import StarIcon from "@material-ui/icons/Star";
import {useStateValue} from "../StateProvider";
const Product=({id,title,price,image,rating})=> {
    const [{basket}, dispatch] = useStateValue();

 console.log("This id the basket>>>")
   const addToBasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            }
        })
   }

    return (
        <div className="product">
           <div className="product__info"> 
            <p>{title}</p>
            <p className="product__price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div
             className="prduct__rating">
               {
                        Array(rating).fill()
                        .map((_,i)=>(
                            <p><StarIcon/></p>
                        ))
                    }
            </div>
           </div>
            <img
            className="product__image"
            src={image} alt=""/> 
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
