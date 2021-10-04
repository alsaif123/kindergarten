
import React from 'react';

import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div className="my-5 py-5 text-center home">
             <h1>Educate Your Child ...</h1>
             <h3><h2>Your Child,Our responsiblity</h2>
                 <br />
                 <Link to="/services">
                 <button className='mt-3 btn'> Learn More </button> </Link>

                <section className='section'>
                  <Link style={{
                      decoration:"none"
                  }} to="/services"><h4>Education</h4></Link>  
                  <Link to="/services"><h4>Sports</h4></Link> 
                  <Link to="/services"><h4>Extra curriculum</h4></Link>  
                  <Link to="/services"><h4>Entertainment</h4></Link>  
                    
                    
                    
                </section>
                 
             </h3>
        </div>
    );
};

export default Home;