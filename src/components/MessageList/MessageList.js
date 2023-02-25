import React, {useEffect} from 'react';
import { Message } from '../Message/Message';
import {Form} from '../Form/Form';
import Box from '@mui/material/Box'
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { addMessageTrackerOn, addMessageTrackerOff } from '../../store/messages/action';


export function MessageList() {
  const {chatId} = useParams();
 const messageList = useSelector((state)=> state.messages.messageList[chatId]) 
  const dispatch = useDispatch();


  useEffect(()=> {
   dispatch(addMessageTrackerOn(chatId))
    return () => {
      dispatch(addMessageTrackerOff(chatId))
    }
  }, [chatId]) 


  return (
    <Box sx={{ml:6}} style={{display:"flex", flexDirection:"column"}}>
      <Box> 
        {
          messageList?.map((item) => {return <Message item={item} key={item.id}/>})
        }
        </Box>
        <Form/>
    </Box>
  );
}




