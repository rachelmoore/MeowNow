import { RECEIVE_CAT } from '../actions/cats_actions';
import { merge } from 'lodash';

const CatsReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_CAT: 
            return merge({}, action.cat);
        default: 
            return state;
    }
};

export default CatsReducer;