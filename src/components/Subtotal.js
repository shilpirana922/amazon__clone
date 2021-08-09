import React from 'react'
import "../css/Subtotal.css"
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../StateProvider";
import {getBasketTotal} from "../Reducer";
import {useHistory} from "react-router-dom";
const Subtotal= ()=> {
    const history = useHistory();
    const [{basket}, dispatch] = useStateValue();
    return (
            <div className="subtotal">
            {/* homework */}
            <CurrencyFormat 
                renderText = {(value) => (
                    <>
                        <p>
                Subtotal ({basket.length} items)  : <strong>{`${value}`}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/> This order contains a gift
                        </small>
                    </>
                )}
                value={getBasketTotal(basket)} 
                displayType={'text'} 
                thousandSeparator={true} 
                prefix={'$'} 
            />
            <button onClick={e=>history.push('./payment')}>Procceed  to checkout</button>
            </div>
    )
}

export default Subtotal
