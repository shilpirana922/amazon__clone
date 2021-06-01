import React from 'react'
import "../css/Home.css";
import Product from "./Product.js"
const Home=()=>{
    return (
        <div className="home">
           <div className="home__container">
             <img 
             className="home__image"
             src="https://images-na.ssl-images-amazon.com/images/G/01/adlp/builder/BFF-V1-01-Hero-T-59d56e74-90ad-47d3-b893-5d1b6665011b._CB417386572_.jpg" alt=""/>
           <div 
           className="home__row">
             <Product title="The New Startup 0.96 inch TFT Screen : 0.96 inch TFT high-resolution display, makes the displayed con"
             price="29.99"
             image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1333576876i/10127019._UY630_SR1200,630_.jpg"
             rating={5 }/>
             <Product 
             title="Showcase your talents and skills of sewing and embroidering fabrics with the potable Usha Marvela Sewing Machine. The modern sewing machine comes with practical features like seven applications"
             price="99.99"
             image="https://media.croma.com/image/upload/f_auto,q_auto,d_Croma%20Assets:no-product-image.jpg,h_260,w_260/v1606071737/Croma%20Assets/Small%20Appliances/Home%20Appliances/Images/8971709579294.png"
             rating={4}/>
           </div>
           <div 
           className="home__row">
               <Product
               title="0.96 inch TFT Screen : 0.96 inch TFT high-resolution display, makes the displayed content more vivid and beautiful. Fits the width of the wrist, bring"
               price="21,87"
               image="https://images-eu.ssl-images-amazon.com/images/I/41cA74eG3ML.jpg"
               rating={3}/>
               <Product
               title="Waterproof Portable Bluetooth Speaker
               * Check website for latest pricing and availability. Images may be subject to copyright."
               price="40.00"
               image="https://awesometoplist.com/wp-content/uploads/2020/01/Ring-Peephole-Cam-Smart-video-doorbell-HD-video-2-way-talk-easy-installation-e1580485739915-412x500.jpg"
               rating={4}/>
               <Product
               title="
               TechRadar iPad mini (2019) review | TechRadar
               Images may be subject to copyright"
               price="33,40"
               image="https://awesometoplist.com/wp-content/uploads/2020/01/Ring-Peephole-Cam-Smart-video-doorbell-HD-video-2-way-talk-easy-installation-e1580485739915-412x500.jpg"
               rating={5}/>
           </div>
           <div 
           className="home__row">
             <Product
             title="
             Bajaj Finserv
             TV Buying Guide: How to Choose the Best TV for Your Home"
             price="299,20"
             image="https://ds393qgzrxwzn.cloudfront.net/resize/c500x500/cat1/img/images/0/ZAo5S2ooAu.jpg"
             rating={3}/>
           </div>
        </div>
        </div>
    )
}

export default Home
