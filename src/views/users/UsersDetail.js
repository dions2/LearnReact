import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UsersDetail(props) {
    const [user, setUser] = useState([])
    let {identifier} = useParams();
    const getUser = async() => {
        try{
            let response = await axios.get(`https://jsonplaceholder.typicode.com/users/${identifier}`)
            setUser(response.data);
        }
        catch (e){
            console.log(e.message)
        }
    }

    useEffect(()=>{
        getUser();
    }, [identifier])

    return (
        <div class="container">
            <div class="card">
                <div class="card-header">{user.name}</div>
                <div class="card-body">
                    <div>{user.username}</div>
                    <div>{user.website}</div>
                    <div>{user.phone}</div>
                    <div>{user.email}</div>
                </div>
            </div>
        </div>
    );
}

export default UsersDetail;