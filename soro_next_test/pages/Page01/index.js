import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Page01 = () => {
    const [userNames, setUserNames] = useState();

    useEffect(()=>{
        getUserData();
    },[])

    const getUserData = () => {
        axios.get(`/api/getUserData`).then(result => {
            setUserNames(result.data)
        })
    }

    return (
        <div className="col-10">
            <h1>Page01</h1>
            <p>Api Test, 1초 기다렸다가 오는 경우...</p>
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
                                        <td class="text-center pt-4 pb-4" colSpan={3}>No Data</td>
                                    </tr>
                            }
                        </tbody>
                    </table>
                :
                    <div className="d-flex justify-content-center pt-4 pb-4">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }
            <button type="button" className="btn btn-primary me-2" onClick={()=>{setUserNames(); getUserData()}}>데이터 요청</button>
            <button type="button" className="btn btn-secondary" onClick={()=>{setUserNames([])}}>데이터 삭제</button>
        </div>
    );
};

export default Page01;