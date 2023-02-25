import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { getApiPicThunk } from "../../store/api/actions";
import { getErrorApi, getLoadingApi, getApiPicUrl } from "../../store/api/selector";

import { CircularProgress, Button } from "@mui/material";


export default function TestApi () {
    const dispatch = useDispatch();
    const url = useSelector(getApiPicUrl)
    const isLoading = useSelector(getLoadingApi)
    const error = useSelector(getErrorApi)
   
    function requestHandler () {
      dispatch(getApiPicThunk)
    }

   
    return (
        <div style={{marginTop:"5rem"}}>
            <h1>Hi, I'm a page about Foxes ❤️</h1>
            <p>You can press the button below and see some fox 🦊 ️</p>
            <Button variant="outlined" color="warning" onClick={requestHandler}> Try it</Button>

            {   url &&
                <div style={{marginTop:"40px"}}> 
                 <img src={url} alt="dog pic"/>     
            </div> }
            {
                isLoading && 
                <div style={{marginTop:"20px"}} > <CircularProgress color="warning" /> </div>
            }
            {
                error&& 
                <div style={{marginTop:"40px"}}> 
                    <h3>Oops... Something went wrong. Try again</h3> 
                 </div>
            }
        </div>
    )
}

