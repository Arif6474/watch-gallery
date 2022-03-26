import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Watch from '../Watch/Watch';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    console.log(cart);
    useEffect(() =>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])

    const handleAddToCart = (watch) => {
        
       const newProduct = [...cart, watch]
       setCart(newProduct);
    }
    return (
        <div className="product-container">
            {/* {
            cart.map(item => <h2 key={item.id}>{item.name}</h2>)
            } */}
            
            <div className="products-container">
                {
                    products.map(product => <Watch 
                        key ={product.id}
                         product={product}
                         handleAddToCart = {handleAddToCart}></Watch>)
                }
            </div>
            <div className="cart-container"> 
            {
            cart.map(item => <Cart key={item.id} item={item}></Cart>)
            }
            
             </div>
        </div>
    );
};

export default Products;