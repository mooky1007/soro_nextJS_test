import React, { useEffect, useState, useRef } from 'react';
const ClientSide = () => {
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
      setLoading(true);
      fetch('api/SlideData')
        .then((res) => res.json())
        .then((data) => {
          setData(data);
          setLoading(false);
        });
    }, []);
  
    if (isLoading) return <p>Loading...</p>;
    if (!data) return <p>No profile data</p>;
  
    return (
      <div>
        <h1>My name is {data.message }</h1>

        {console.log(data)}

        {
            data.photos.map((el , num )=>{
                return (<div key={el.albumId}> <img> </br>{el.title}</div>)
            })
        }
      </div>
    );
  };
  
  export default ClientSide;