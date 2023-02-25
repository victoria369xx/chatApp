import {MARK_CHECKBOX} from './actions';
const initialState = {
    isMarked: false
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case(MARK_CHECKBOX): {
            
            return {
                isMarked: !state.isMarked
            }
        }

        default: 
        return state;
    }
}

