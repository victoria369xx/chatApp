import { chatsRef } from "../../firebase";

export const ADD_CHAT_SUCCESS = "ADD_CHAT_SUCCESS";
export const REMOVE_CHAT = "REMOVE_CHAT";
export const RESET_CHATS = "RESET_CHATS"; 


export const addChatSuccess = (chat) => ({
    type: "ADD_CHAT_SUCCESS",
    payload: chat
}); 

export const removeChat = (id) => ({
    type: "REMOVE_CHAT",
    payload: id
}); 

export const resetChats = () => ({
    type: "RESET_CHATS"
}); 

export const addChatFail = (error) => ({
    type: "ADD_CHAT_FAIL",
    payload: error
}); 


export const addChatAction = (chat) => (dispatch) => {
    chatsRef.push(chat, (error) =>{
        if(error) {
            dispatch(addChatFail(error))
        }
    })
}

export const addChatTrackerOn = (dispatch) => {
    chatsRef.on ('child_added', (snapshot)=> {
        dispatch(addChatSuccess({
            ...snapshot.val(),
            id: snapshot.key
        }))
    })
}

export const addChatTrackerOff = (dispatch) => {
    dispatch(resetChats());
    chatsRef.off('child_added')
}

export const removeChatAction = (id) => ()=> {
    chatsRef.child(id).remove(()=>{
        
    })
}

export const removeChatTrackerOn = (dispatch) => {
    chatsRef.on ('child_removed', (snapshot) => {
        dispatch(removeChat(snapshot.key))
})
}

export const removeChatTrackerOff = () => {
    chatsRef.off('child_removed')
}
