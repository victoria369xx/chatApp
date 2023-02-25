import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { profileReducer } from './profile/reducer';
import { chatsReducer } from './chats/reducer';
import { messageReducer } from './messages/reducer';
import { apiReducer } from './api/reducer';
import { userReducer } from './user/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; 



const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    messages: messageReducer,
    testApi: apiReducer,
    user: userReducer
});


export const store = createStore(
rootReducer,
composeEnhancers(applyMiddleware(thunk))
);
