
import React , {useState, useContext} from 'react';
import './Body.css'
import { ButtonContext } from './ButtonContext';

const Body = () => {

    const {buttonText, setButtonText} = useContext(ButtonContext);

    return (
        <>
         <div className='my-body'>
            <div className = 'my-child'>
              <h1> {buttonText}</h1>
            </div>
           
         </div>
        </>
    )
}

export default Body;

