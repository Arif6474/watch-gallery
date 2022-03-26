import React, { useEffect, useState } from 'react';
import Watch from '../Watch/Watch';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() =>{
        fetch('product.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className="product-container">
            
            <div className="products-container">
                {
                    products.map(product => <Watch key ={product.id} product={product}></Watch>)
                }
            </div>
            <div className="cart-container"> <h2>this is for cart</h2> </div>
        </div>
    );
};

export default Products;