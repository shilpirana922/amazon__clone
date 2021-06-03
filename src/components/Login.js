import React,{useState} from 'react';
import "../css/Login.css";
import {Link , useHistory} from "react-router-dom";
import {auth} from "../Firebase";

const Login=()=> {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");

    const history = useHistory();
     
    const signIn = (e)=>{
        e.preventDefault();

        //firebase login stuff......
        auth.signInWithEmailAndPassword(email, password)
        .then(auth=>{
            history.push("/")
         }).catch(error=>error.message)

    }

    const register =(e)=>{
        e.preventDefault();
         //firebase login stuff......
         auth.createUserWithEmailAndPassword(email, password)
         .then((auth)=>{
             //successfully created  a new user with email and password
             console.log(auth);
             if(auth){
                 history.push("/");
             }
         })
         .catch(error=>error.message);
    }

    return (
        <div className="login">
            <Link to="/">
            <img 
            className="login__logo"
            src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG" alt=""/>
            </Link>
           <div className="login__container">
               <h1>Sign-in</h1>
               <form>
                  <h5>E-mail</h5>
                  <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>

                  <h5>Password</h5>
                  <input type="password" value={password} onChange={e=>setPassword(e.target.value)}/>

                  <button
                   className="login__signinButton"
                    onClick={signIn}
                    type="submit"
                    >Sign in</button>
               </form>

               <p>By signing-in you agree to the Amazon fake clone and ourcondition of Use & Sale.
                   Please see our privacy noyice, our cookies notice and our interest based Ads notices.
               </p>
               <button
                 onClick={register}
                className="login__registerButton">
                    Create your Amazon Account</button>
           </div>
        </div>
    )
}

export default Login;
