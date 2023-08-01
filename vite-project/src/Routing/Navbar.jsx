import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <>

       <ul>
        <li>Home</li>
        <li>Contact Us</li>
        <li> <Link to='/about'> About Us </Link>      </li>
        <li>Career</li>
       </ul>
        
        </>
    )
}

export default Navbar;