export const initialState = {
  userInfo: {},
  oppLocation: {},
  currUserInfo: {},
  winner: '',
};

export default function Reducer(state = initialState, action) {
  const copiedState = JSON.parse(JSON.stringify(state));
  const {
    type,
    userInfo,
    oppLocation,
    currUserInfo,
    winner,
  } = action;

  switch (type) {
    case 'SET_USER_NAME':
      copiedState.userInfo = userInfo;
      return copiedState;
    case 'GET_LOCATION':
      copiedState.oppLocation = oppLocation;
      return copiedState;
    case 'GET_CURR_USER_INFO':
      copiedState.currUserInfo = currUserInfo;
      return copiedState;
    case 'GET_REAL_WINNER':
      copiedState.winner = winner;
      return copiedState;
    default:
      return state;
  }
}
