import { Button } from 'bootstrap';
import React, { useEffect } from 'react';


useEffect(() => {
    SlideHandler();
    return () => {
        console.log('ddd');
    };
}, [input]);

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