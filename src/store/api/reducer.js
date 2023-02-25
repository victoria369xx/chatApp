import { SET_ERROR_API, SET_LOADING_API, SET_API_PIC } from "./actions";

const initialState = {
    pictureUrl: null,
    isLoading: false,
    error: null
}

export const apiReducer = (state = initialState, action) => {
    switch(action.type) {

        case(SET_LOADING_API): {
            return {
                ...state,
                isLoading: action.payload
            }
        }

        case(SET_ERROR_API): {
            return {
                ...state,
                error: action.payload
            }
        }

        case(SET_API_PIC): {
            return {
                ...state,
                pictureUrl: action.payload
            }
        }
        

        default: 
        return state;
    }
}