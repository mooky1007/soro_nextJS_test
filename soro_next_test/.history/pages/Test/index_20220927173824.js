import React, { useEffect } from 'react';
import axios from 'axios';



const Test = (props) => {

    useEffect(() => {
        SlideHandler();
        return () => {
            console.log('test');
        };
    }, []);
    
    const SlideHandler = ()=>{
        request.current = axios.CancelToken.source();
    }
    return(
        <div>
            tttt
        </div>
    );
            
};

export default Test;