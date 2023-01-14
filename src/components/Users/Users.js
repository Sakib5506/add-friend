import React from 'react';
import './Users.css'

const Users = (props) => {
    // console.log(props);
    return (
              <div className='user-container'>
            <div className='single-user'>
                <img className='img' src={props.details.picture.large} alt="" />
                
                <div className="details">
                <h3>{`${props.details.name.first} ${props.details.name.last}`}</h3>
                <p><small>{props.details.registered.age} mutual friend</small></p>
                <button 
                onClick={()=> 
                props.addHandler(props)
                }
                 className='add-btn'>Add Friend</button>
                </div>
                

                
            </div>
            

        </div>

    );
};

export default Users;

