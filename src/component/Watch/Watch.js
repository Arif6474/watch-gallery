import React from 'react';
import './Watch.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import {  faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Watch = ({product, handleAddToCart}) => {
    
    const {name, id , picture, price} = product;
    return (
        <div className="watch-container">
            <img src={picture} alt="" />
            <div className="watch-info">
            <h2 className="watch-name">Name: {name}</h2>
            <p className= "watch-id">Id: {id}</p>
            <h4>Price: ${price}</h4>
            </div>
            <button onClick={() => handleAddToCart(product)} className= "cart-btn">
               <p>Add to Cart</p> <FontAwesomeIcon icon ={ faShoppingCart } ></FontAwesomeIcon> </button>
        </div>
    );
};

export default Watch;