import { initialState, chatsReducer} from "../reducer";
import { addChatSuccess, removeChat, resetChats } from "../action";

describe ('тестирую chatsReducer', ()=> {
    it("добавляет чат", ()=> {
        const chat = "chat1" 
        const result = chatsReducer(initialState, addChatSuccess(chat))

        expect(result).toEqual({
            chatList: [
                chat
            ]
        })
    })
    it("удаляет чат", ()=> {
        let chats = {
            chatList: [
            {id: 1, chat: "chat1"},
            {id: 2, chat: "chat2"}
        ]}
        const result = chatsReducer(chats, removeChat(1))

        expect(result).toEqual({
            chatList : [
                {id: 2, chat: "chat2"}
            ]
        })
    })
    it("reset чатов возвращает initialState", ()=> {
        let chats = {
            chatList: [
            {id: 1, chat: "chat1"},
            {id: 2, chat: "chat2"}
        ]}
        const result = chatsReducer(chats, resetChats())

        expect(result).toEqual({
            chatList: []
        })
    })
    it("вызов редьюсера без экшена возвращает state", ()=> {
    
        const result = chatsReducer()
        expect(result).toEqual({
            chatList: []
        })
    })
})