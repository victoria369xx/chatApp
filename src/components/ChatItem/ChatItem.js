import React, { useEffect } from 'react'; 
import propTypes from 'prop-types';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import {Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {removeChatAction, removeChatTrackerOff, removeChatTrackerOn} from '../../store/chats/action';


export function ChatItem (props) {
    const dispatch = useDispatch(); 

    useEffect(()=> {
        dispatch(removeChatTrackerOn)
        return () => {
            dispatch(removeChatTrackerOff)
        }
    }, [])

    const deleteChatHandler = (id) => () => { 
        dispatch(removeChatAction(id))
    }
    
   
    return (
            <Box sx={{display: 'flex'}}> 
                 <ListItem sx={{ borderBottom: 1, borderBottomColor: '#ccc'}} component={Link} to={`/chats/${props.item.id}`}>
                <Avatar sx={{mr:2}}><PersonIcon/></Avatar>
                {props.item.name}</ListItem><Button onClick={deleteChatHandler(props.item.id)}> <DeleteIcon/></Button>
            </Box>
            
            
    )
}

ChatItem.propTypes = {
    item: propTypes.object,
}