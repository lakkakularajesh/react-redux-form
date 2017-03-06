export const reducerForm = (state = {progress : ''}, action) => {
  let newState = Object.assign({}, state);
  switch(action.type) {
    case 'LOAD':
      newState.progress = action.text;
      break;
    case 'DONE':
      newState.progress = action.text;
      break;
  }
  return newState;
};
