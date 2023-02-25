import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logInUserThunk } from "../../store/user/actions";

import {TextField, Button, Card} from '@mui/material';


export default function LogIn () {

    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const dispatch = useDispatch(); 

    function emailSubmitHandler (event) {
        setEmail(event.target.value)
    }

    function passwordSubmitHandler (event) {
        setPassword(event.target.value)
    }


    function clearForm () {
        setEmail("");
        setPassword("");
    }

    function logInHandler (event) {
        event.preventDefault()
        dispatch(logInUserThunk(email,password))
        clearForm()
    }

    return <Card style={{marginTop:"5rem", width: "25rem", paddingLeft:"3rem"}}>
        <h1>LogIn</h1>
        <form style={{display:"flex", flexDirection:"column"}} onSubmit={logInHandler}>
            <TextField type="email" placeholder="Email" size="small" style={{width:"300px"}} value={email} onChange={emailSubmitHandler}/>
            <TextField type="password" placeholder="Password" size="small" style={{width:"300px"}} value={password} onChange={passwordSubmitHandler}/>
            <Button type="submit" variant="contained" size="medium" style={{width:"150px", marginTop:"2rem"}}>Log in</Button>
        </form>

        <p>
            Don't have an account? <br/>
            <Link to="/signup">Register</Link>
        </p>
    </Card>
}