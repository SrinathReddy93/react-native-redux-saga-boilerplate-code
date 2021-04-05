import { COUNTER_CHANGE, API_RESPONSE } from '../constants';

const initialState = {
    count: 0
};

const countReducer = (state = initialState, action) => {
    switch(action.type) {
        case COUNTER_CHANGE:
            return {
            ...state,
            count:action.payload
            };
        case API_RESPONSE:
            return {
            ...state,
            count:state.count+10
            };
        default:
             return state;
    }
}
export default countReducer;