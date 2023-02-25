import React, {useEffect} from 'react';
import propTypes  from 'prop-types';
import {Box, Button} from '@mui/material';
import {useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { removeMessageAction, removeMessageTrackerOn, removeMessageTrackerOff } from '../../store/messages/action';


export function Message(props) {
  const dispatch = useDispatch()
  const {chatId} = useParams();

  
  useEffect(()=> {
    dispatch(removeMessageTrackerOn(chatId))
     return () => {
       dispatch(removeMessageTrackerOff(chatId))
     }
   }, [chatId]) 
  
  const  removeMessageHandler = (id) => ()=> {
    dispatch(removeMessageAction(chatId, id))
  }
  return (
      <Box sx={{
        mb:2,
        display: "flex",
        justifyContent: "space-between"
         }}>
    <Box sx={{
      boxShadow:1,
      borderRadius: '3px',
      padding: 1,
      maxWidth: "300px"
    }}> {props.item.text}</Box>
    <Button variant="outlined" onClick={removeMessageHandler(props.item.id)} sx={{
      height: "30px"
    }}>X</Button>
    </Box>
  );
}

Message.propTypes = {
  item: propTypes.object
}