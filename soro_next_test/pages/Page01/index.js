import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Page01 = () => {
    const [userNames, setUserNames] = useState();
    const request = useRef();

    useEffect(()=>{
        getUserData();
    },[])

    const getUserData = () => {
        request.current = axios.CancelToken.source();
        axios.get(`/api/getUserData`, {cancelToken: request.current.token}).then(result => {
            setUserNames(result.data);
        })
    }

    const callData = () => {
        request.current.cancel(); 
        setUserNames();
        getUserData()
    }

    const deleteData = () => {
        request.current.cancel(); 
        setUserNames([])
    }

    return (
        <div className="col-10">
            <h1>Page01</h1>
            <p>Api Test, {`${userNames ? `데이터 로드 완료` :  `데이터 요청중...`}`}</p>
            <hr />
            {
                userNames
                ?
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userNames.length !== 0
                                ?
                                    userNames.map((el, index) => {
                                        return(
                                            <tr key={index}>
                                                <th scope="row">{index}</th>
                                                <td>{el.name}</td>
                                                <td>{el.age}</td>
                                            </tr>
                                        )
                                    })
                                :
                                    <tr>
                                        <td className="text-center pt-4 pb-4" colSpan={3}>No Data</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                :
                    <div className="d-flex justify-content-center pt-4 pb-4">
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }
            <button type="button" className="btn btn-primary me-2" onClick={()=>{callData()}}>데이터 요청</button>
            <button type="button" className="btn btn-secondary" onClick={()=>{deleteData()}}>데이터 삭제</button>
        </div>
    );
};

export default Page01;