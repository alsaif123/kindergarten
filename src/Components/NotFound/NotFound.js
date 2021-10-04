import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound..css'

const NotFound = () => {
    return (
        <div className="container">
            <h1 className="my-5 py-5 text-center food">404
            Not found</h1>
            <br />
           <button> <Link to='/home'>Go to Home</Link></button>
        </div>
    );
};

export default NotFound;<h1>This is about us page</h1>