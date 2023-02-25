import {ADD_CHAT_SUCCESS, REMOVE_CHAT, RESET_CHATS} from './action';

const initialState = {
    chatList: []
}

export const chatsReducer = (state = initialState, action) => {
    switch (action?.type) {
        case(ADD_CHAT_SUCCESS): {
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    action.payload
                ]
            }
        }
        case(REMOVE_CHAT): {
            return {
                ...state,
                chatList: state.chatList.filter(({id})=> id !== action.payload)   
            }
        }

        case(RESET_CHATS): {
            return initialState
        }
        default: {
            return state;
        }
    }
}