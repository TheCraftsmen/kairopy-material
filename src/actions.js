 /* eslint-disable */
const LOGIN_USER = 'LOGIN_USER';
const GET_FEED = 'GET_FEED';
const PAGE_TOKEN = 'PAGE_TOKEN';
const CLEAN_POST = 'CLEAN_POST';
const LOGOUT_USER = 'LOGOUT_USER';

export function loginIn(){
  return dispatch => {
    dispatch({
      type: LOGIN_USER,
      status: true
    })
  }
}

export function loginOut(){
  return dispatch => {
    dispatch({
      type: LOGOUT_USER,
      status: false
    })
  }
}

export function getFeedItem(feed_id,feed_item){
  return dispatch => {
    dispatch({
      type: GET_FEED,
      data: feed_item,
      id: feed_id
    });
  }
}

export function setToken(user_page_data){
  return dispatch => {
    dispatch({
      type: PAGE_TOKEN,
      user_page: user_page_data
    });
  } 
}

export function cleanPost(feed_id){
  return dispatch => {
    dispatch({
      type: CLEAN_POST,
      id: feed_id
    });
  }  
}



