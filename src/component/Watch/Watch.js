import React from 'react';
import './Watch.css'


const Watch = (props) => {
    console.log(props);
    const {name, id , picture, price} = props.product;
    return (
        <div className="watch-container">
            <img src={picture} alt="" />
            <div className="watch-info">
            <h2 className="watch-name">Name: {name}</h2>
            <p className= "watch-id">Id: {id}</p>
            <h4>Price: ${price}</h4>
            </div>
            <button  className= "cart-btn">
               <p>Add to Cart</p> </button>
        </div>
    );
};

export default Watch;