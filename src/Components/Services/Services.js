import React, { useEffect, useState } from 'react';
import Information from '../Information/Information';

const Services = () => {
    const [informations, setInformations] = useState([]);

useEffect(()=>{
    fetch("./Data.JSON")
     .then(res => res.json())
     .then(data => setInformations(data))
     
},[])
    return (
        <div className="my-5 py-5 text-center">
            {
                informations.map(information => <Information 
                information={information}></Information>)
            }
        </div>
    );
};

export default Services;