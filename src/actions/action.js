const SET_USER_NAME = 'SET_USER_NAME';

export default function Action(userInfo) {
  return {
    type: SET_USER_NAME,
    userInfo,
  };
}
