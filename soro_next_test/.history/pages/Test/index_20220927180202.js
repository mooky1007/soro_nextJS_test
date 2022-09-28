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
        <h1>My name is {console.log(data)}</h1>
      </div>
    );
  };
  
  export default ClientSide;