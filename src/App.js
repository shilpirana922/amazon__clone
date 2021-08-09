import React, {useEffect} from "react";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Payment from "./components/Payment";
import {BrowserRouter as Router, Switch,Route} from "react-router-dom";
import {auth} from "./Firebase";
import {useStateValue} from "./StateProvider";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51IyuudSFKfEAyzn1PAQiEwXyzXaR8rHwa3ho7qokrqFC7dda7xO4mqZkbM6p6twcdN5HjVxpiTGXvKlkqeKreacD00X0uAihP3"
);


function App() {
const [{}, dispatch] = useStateValue();


 useEffect(()=>{
     //will only run once when the app component loads......
      auth.onAuthStateChanged(authUser=>{
        console.log("this user is >>>>>>", authUser);
        if(authUser){
          //the user just logged in / the user was logged in
          dispatch({
            type:"SET_USER",
            user:authUser
          })
        }
        else{
          //the user logged out
          dispatch({
            type:"SET_USER",
            user:null
          })
        }
      })
 },[])

  return (
  <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
          <Payment/>
          </Elements>
        </Route>
      <Route path="/checkout">
          <Header/>
          <Checkout/>
       </Route>
        <Route path="/">
          <Header/>
           <Home/>
       </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;
