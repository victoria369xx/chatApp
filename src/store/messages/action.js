import { messagesRef } from "../../firebase";

export const ADD_MESSAGE_SUCCESS = "ADD_MESSAGE_SUCCESS";
export const ADD_MESSAGE_FAIL = "ADD_MESSAGE_FAIL";
export const RESET_MESSAGES = "RESET_MESSAGES";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";


export const addMessageSuccess = (chatId, message) => ({
    type: "ADD_MESSAGE_SUCCESS",
    payload: {
        chatId,
        message
    }
});

export const addMessageFail = (error) => ({
    type: "ADD_CHAT_FAIL",
    payload: error
}); 

export const removeMessage = (chatId, messageId) => ({
    type: "REMOVE_MESSAGE",
    payload: {
        chatId,
        messageId
    }
})

export const resetMessages= () => ({
    type: "RESET_MESSAGES"
})


export const addMessageAction = (chatId, message) => (dispatch) => {
    messagesRef.child(chatId).push(message, (error)=> {
        if(error) {
            dispatch(addMessageFail(error))
        }
    })
}

export const addMessageTrackerOn = (chatId) => (dispatch) => {
    messagesRef.child(chatId).on('child_added', (snapshot)=> {
        const message = {
            id: snapshot.key,
            text: snapshot.val(),
        }
        dispatch(addMessageSuccess(chatId, message))
    })
}; 


export const addMessageTrackerOff = (chatId) => (dispatch) => {
    dispatch(resetMessages());
    messagesRef.child(chatId).off('child_added')
}; 

export const removeMessageAction = (chatId, messageId) => () => {
    messagesRef.child(chatId).child(messageId).remove(()=>{

    })
};

export const removeMessageTrackerOn = (chatId) => (dispatch) => {
    messagesRef.child(chatId).on('child_removed', (snapshot)=>{
        let messageId = snapshot.key
        dispatch(removeMessage(chatId, messageId))
    })
};

export const removeMessageTrackerOff = (chatId) => ()=> {
    messagesRef.child(chatId).off('child_removed')
};