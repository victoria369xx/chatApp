import React, { useEffect, useState } from 'react'; 
import { ChatItem } from '../ChatItem/ChatItem';
import {List, Button, TextField} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getChatList } from '../../store/chats/selectors';
import {addChatAction, addChatTrackerOff, addChatTrackerOn} from '../../store/chats/action';


export function ChatList () {
    const chatList = useSelector(getChatList);
    const dispatch = useDispatch(); 

    const [chatName, setChatName] = useState('')

    useEffect(()=>{
      dispatch(addChatTrackerOn)
      return () => {
        dispatch(addChatTrackerOff)
      }
    }, [])

    function addChatHandler () {
  
        dispatch(addChatAction({
          name: chatName
        }))
        setChatName(' ')
    }

  
    return ( <div>
      <TextField placeholder='Enter chat name' size='small' value={chatName} onChange={event => setChatName(event.target.value)}/>
      <Button variant="outlined" onClick={addChatHandler}> add chat + </Button>
        <List sx={{ml:2, mt:2}}>
        {
          chatList.map((item, idx) => {return  <ChatItem item={item} key= {idx}/> 
        }) 
      }
    </List> 
    </div>
    )
}

