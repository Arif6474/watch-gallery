import React from 'react';
import './Cart.css'

const Cart = ({item}) => {
   
 const {name} = item;
    
    return (
        <div className="cart">
           
              <p> {name} </p>
            
        </div>
    );
};

export default Cart;