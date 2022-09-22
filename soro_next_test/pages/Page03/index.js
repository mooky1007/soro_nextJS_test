import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Page03 = ({savedData, setSavedData}) => {
    const [testText, setTestText] = useState(savedData ? savedData : '');

    const postTestData = (data) => {
        axios.post(`/api/postTestData`, {data}).then(result => {
            setSavedData(result.data.data);
        })
    }
    
    return (
        <div>
            <h1>Page03</h1>
            <p>Page02로 보내는 데이터</p>
            <form onSubmit={(e)=>{
                e.preventDefault();
                if(testText){
                    postTestData(testText)
                }else{
                    alert('데이터를 입력해주세요.');
                }
            }}>
                <div className="input_group">
                    <input type="text" value={testText} onChange={(e)=>{setTestText(e.target.value)}}/>
                </div>
                <button type="submit" className="btn btn-primary me-2 mt-3">데이터 보내기</button>
            </form>
        </div>
    );
};

export default Page03;