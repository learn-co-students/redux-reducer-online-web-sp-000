export function managePresents(state, action){
  // if (action.type === 'INCREASE') {
  //   return {numberOfPresents: state.numberOfPresents + 1}
  // } else {
  //   return state;
  // }
  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1};
    default:
      return state;
  }

}

let state = { numberOfPresents: 0 };
