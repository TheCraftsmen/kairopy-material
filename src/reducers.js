/* eslint-disable */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

const LOGIN_USER = 'LOGIN_USER';
const GET_FEED = 'GET_FEED';
const PAGE_TOKEN = 'PAGE_TOKEN';
const CLEAN_POST = 'CLEAN_POST';
const LOGOUT_USER = 'LOGOUT_USER';

const user_data = {
  login_status: false,
  user_id : '',
  user_token: '',
  user_pages: {}
}

const user = (state = user_data, action) => {
  switch(action.type){
    case LOGIN_USER:
      state.login_status = action.status;
      return Object.assign({}, state);
    case LOGOUT_USER:
      state.login_status = action.status;
      return Object.assign({}, state);
    case PAGE_TOKEN:
      state.user_pages[action.user_page.id] = action.user_page;
      return Object.assign({}, state);
    default:
      return Object.assign({}, state);
  }
}

const posts = (state = {}, action) => {
  switch(action.type) {
    case GET_FEED:
      if( action.id in state )
        state[action.id].push(action.data);
      else
        state[action.id] = [action.data]
      return Object.assign({}, state);
    case CLEAN_POST:
      if( action.id in state )
        //delete state[action.id];
      state[action.id] = [];
      return Object.assign({}, state);
  	default:
      return state;
  }
};


const reducer = combineReducers({posts, user, routing: routerReducer});
export default reducer;