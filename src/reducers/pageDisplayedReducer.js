import { FEED, FRIENDS, EDIT_PROFILE, CREATE_ACCOUNT } from '../actions/types';

let initialState = {
    type: FEED
}

const pageDisplayedReducer = (state = initialState, action) => {
    switch(action.type){
        case FEED:
            return  state = action;
        case FRIENDS:
            return  state = action;
        case EDIT_PROFILE:
                return state = action;
        case CREATE_ACCOUNT:
                return state = action;
        default:
            return state
    }
}
export default pageDisplayedReducer;