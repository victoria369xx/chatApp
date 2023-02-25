import React, { useState, useRef, useEffect} from "react";
import Box from '@mui/material/Box';
import Input from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch} from "react-redux";
import { addMessageAction} from "../../store/messages/action";
import { useParams } from "react-router-dom";


export function Form (){
    const {chatId} = useParams();
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
      }, []);

      const [text, setMsgTxt] = useState('') 

    function clearForm () {
        setMsgTxt(' ')
      }
    
    function submitHandler (event) {
            event.preventDefault();
            dispatch(addMessageAction(chatId, text))
            clearForm ()
    }
    return (
        <Box sx={{
            mt:2,
            display: 'flex',
            justifyContent: 'center'
        }}>
        <form onSubmit={submitHandler}>
        <Input  required  inputRef={inputRef} id="outlined-required" data-testid="input" label="Enter your message here"  size="small"  value={text} sx={{mr:1}} onChange={event => setMsgTxt(event.target.value)}/>
            <Button type='submit' variant="contained" size="medium" sx={{p:1}}> <SendIcon/> </Button>
        </form>
        </Box>
    )
}

