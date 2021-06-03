import React from 'react';
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import {Link} from "react-router-dom"
import { useStateValue } from '../StateProvider';
import { auth } from '../Firebase';
const Header= ()=>{
  const [{basket, user}, dispatch] = useStateValue();
  const handleAuthantication = ()=>{
    if(user){
    auth.signOut();
    }
  }

    return (
        <div className="header">
          <Link to="/">
          <img 
            className="header_logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/> 
          </Link>
            <div
              className="header_search">
               <input
                className="header_searchInput"
                type="text"/>
                <SearchIcon
                className="header_searchIcon"/>
            </div>

            <div 
             className="header_nav">
               <Link to={!user 
              && "/login"}>
              <div
              onClick ={handleAuthantication}
              className="header_options">
                <span className="header_options_lineOne">{user ? user.email: "Hello Guest"}</span>
                <span className="header_options_lineTwo">{user ? "Sign out" : "Sign In" }</span>
              </div>
              </Link>
              <div className="header_options">
                <span className="header_options_lineOne">Returns</span>
                <span className="header_options_lineTwo">Orders</span>
              </div>
              <div className="header_options">
                <span className="header_options_lineOne">Your</span>
                <span className="header_options_lineTwo">Prime</span>
              </div>
              <Link to="/checkout">
              <div
               className="header_optionsBasket">
                 <ShoppingBasketIcon/>
                 <span className="header_options_lineTwo header_basketCount">{basket?.length}</span>
              </div>
              </Link>
            </div>
        </div>
    )
}

export default Header;
