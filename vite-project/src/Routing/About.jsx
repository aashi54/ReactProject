import React from 'react';
import { Link } from 'react-router-dom';


const About = () =>{
    return (
        <>
        <h1> This is About component</h1>
      <button> <Link to='/'> Go back to home</Link>
        </button> 
        </>
    )
}

export default About;