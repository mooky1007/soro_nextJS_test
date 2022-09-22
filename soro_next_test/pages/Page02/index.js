import React from 'react';

const Page02 = ({savedData}) => {
    return (
        <div>
            <h1>Page02</h1>
            <p>Page03에서 입력받은 데이터는 {savedData ? savedData : '없습니다.'}</p>
        </div>
    );
};

export default Page02;