import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Test = (props) => {

    const [slideItem,setSlide ]=useState([]);

    useEffect(() => {
        
        const fetchSlide = async () =>{
            const res = await fetch('/api/getUserData');
            const  {photos,test} = await res.json();
            setSlide(photos,test);
        }
        fetchSlide();

        return () => {
            console.log('test');
        };
    }, []);
    

    return(
        <div>
            tttt
        </div>
    );
            
};

export default Test;