import React, { useEffect } from 'react';
import axios from 'axios';



const Test = (props) => {

    useEffect(() => {
        SlideHandler();
        return () => {
            console.log('ddd');
        };
    }, []);
    
    const SlideHandler = ()=>{
    
    }
    return(
        <div>
            tttt
        </div>
    );
            
};

export default Test;