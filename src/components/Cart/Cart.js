import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // console.log(props.cartItem.email);
    let total = 0;
    for(let i=0; i<props.cartItem.length;i++){
        total = total + props.cartItem[i].details.location.street.number;     
    }
    console.log(total);
    return (
        <div className='cart'>
            <h1>Profit of Adding People</h1>
            <h3>Total added: {props.cartItem.length}</h3>
            <h3>Their monthly income: ${total}</h3>
            
        </div>
    );
};

export default Cart;