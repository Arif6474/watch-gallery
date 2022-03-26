import React from 'react';
import './Description.css'

const Description = () => {
    return (
        <div className="description-container">
            <div>
            <h3 className="title">How Does React Work?</h3>
            <p className="description">  React is the most widely used front-end JavaScript library in the web development. React takes a declarative approach to application development that makes it simple .It is a component-based, open-source front-end library that is exclusively responsible for the application's view layer.React updates and renders the appropriate component quickly.React splits the user interface into several components.</p>
            </div>
            <div>
            <h3 className="title">Differences between props vs state</h3>
            <p className="description"> Props are variables passed to it by its parent component. State is still variables, but directly initialized. Props can be used to set the internal state based on a prop value in the constructor. Props should never be changed in a child component.This is a good way to centralize managing the state in parent component. </p>
            </div>

        </div>
    );
};

export default Description;