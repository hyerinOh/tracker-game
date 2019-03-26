const SET_USER_NAME = 'SET_USER_NAME';
const GET_LOCATION = 'GET_LOCATION';
const GET_CURR_USER_INFO = 'GET_CURR_USER_INFO';
const GET_REAL_WINNER = 'GET_REAL_WINNER';
const GET_TARGET = 'GET_TARGET';

export function Action(userInfo) {
  return {
    type: SET_USER_NAME,
    userInfo,
  };
}

export function getCurrentUserInfo(currUserInfo) {
  return {
    type: GET_CURR_USER_INFO,
    currUserInfo,
  };
}

export function GetLocation(oppLocation) {
  return {
    type: GET_LOCATION,
    oppLocation,
  };
}

export function getRealWinner(winner) {
  return {
    type: GET_REAL_WINNER,
    winner,
  };
}

export function getTarget(target) {
  return {
    type: GET_TARGET,
    target,
  };
}
