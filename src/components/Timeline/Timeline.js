import React from 'react';
import './Timeline.css'

import { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Users from '../Users/Users';

    const Timeline = () => {
    const [user, setUser] = useState([]);
    const [cartItem, serCartItem] = useState([]);

    useEffect(()=>{
    fetch('https://randomuser.me/api/?results=15')
    .then(res => res.json())
    .then(data => setUser(data.results))
    },[])

    const addHandler = (num)=>{
        const item = [...cartItem, num];
        serCartItem(item);
    }

    return (
        <div className='timeline-container'>
            <div className='user-container'>
            {
                user.map(person => 
                <Users 
                    details={person}
                    addHandler={addHandler}
                    key={person.login.uuid}
                ></Users>
                )
            }
            </div>
            <div className='cart-container'>
                <Cart cartItem={cartItem}></Cart>
            </div>
      
        </div>
        

    
    );
};

export default Timeline;