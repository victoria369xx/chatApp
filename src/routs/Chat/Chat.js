import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Redirect } from 'react-router-dom';
import { getChatList } from '../../store/chats/selectors';
import {MessageList} from '../../components';



export default function Chat () {
    const chatList = useSelector(getChatList);
    const {chatId} = useParams();
    if (!chatList.find(({id})=> id === chatId)) {
        return <Redirect to="/chats"/>
    }

    return (
        <div>
            <h3> Chat {chatId}</h3>
            <MessageList/>
        </div>
        
    )
}