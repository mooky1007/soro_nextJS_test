import React, { useEffect, useState } from 'react';
import axios from 'axios';



const Test = (props) => {

    const [slideItem,setSlide ]=useState(null);
    const request = useRef();
    useEffect(() => {
        SlideHandler();
        return () => {
            console.log('test');
        };
    }, []);
    
    const SlideHandler = ()=>{
        request.current = axios.CancelToken.source();
        axios.get(`/api/SlideData`, {cancelToken: request.current.token}).then(result => {
            setSlide(result.data);
        })
    }
    return(
        <div>
          {slideItem}
        </div>
    );
            
};

export default Test;