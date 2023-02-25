import React from 'react';
import { useSelector } from 'react-redux';
import {getUser} from '../../store/user/selectors';

export default function Profile () {

const user = useSelector(getUser)

    return (
        <div style={{marginTop:"5rem"}}>
            <h1> Profile </h1>
            <p>You are logged in as  {user.email}</p>
        </div>
    )
}