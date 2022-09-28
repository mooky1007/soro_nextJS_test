import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Test = (props) => {

    const [slideItem,setSlide ]=useState(null);

    useEffect(() => {
        SlideHandler();
        return () => {
            console.log('test');
        };
    }, []);
    
    const SlideHandler = ()=>{
        request.current = axios.CancelToken.source();
        axios.get(`/api/SlideData`, {cancelToken: request.current.token}).then(result => {
            setUserNames(result.data);
        })
    }
    return(
        <div>
            tttt
        </div>
    );
            
};

export default Test;