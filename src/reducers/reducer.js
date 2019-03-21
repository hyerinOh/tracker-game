export const initialState = {
  userInfo: {},
};

export default function Reducer(state = initialState, action) {
  const copiedState = JSON.parse(JSON.stringify(state));
  const {
    type,
    userInfo,
  } = action;

  switch (type) {
    case 'SET_USER_NAME':
      copiedState.userInfo = userInfo;
      return copiedState;
    default:
      return state;
  }
}
