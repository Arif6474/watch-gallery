import React from 'react';

const Watch = (props) => {
    console.log(props);
    const {name, id , picture, price} = props.product;
    return (
        <div>
            <img src={picture} alt="" />
            <h2>Name: {name}</h2>
            <p>Id: {id}</p>
            <h4>Price: ${price}</h4>
        </div>
    );
};

export default Watch;