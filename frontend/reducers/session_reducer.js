import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, CLEAR_ERRORS } from '../actions/session_actions';

const _nullUser = Object.freeze({ currentUser: null, errors: [] });

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, { currentUser });
    case CLEAR_ERRORS:
      const newState = Object.assign({}, state, { errors: [] });
      return newState;
    default:
      return state;
  }
};

export default SessionReducer;
