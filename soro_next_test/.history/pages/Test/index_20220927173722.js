import React, { useEffect } from 'react';
import axios from 'axios';

useEffect(() => {
    SlideHandler();
    return () => {
        console.log('ddd');
    };
}, []);

const SlideHandler = ()=>{

}

const Test = (props) => {
    return(
        <div>
            tttt
        </div>
    );
            
};

export default Test;