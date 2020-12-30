// Set an default value for the state argument - an object with a key, numberOfPresents, assigned to 0
// If the reducer receives a type set to "INCREASE", return a new state where the value of numberOfPresents is increased by one.

export function managePresents(state, action){
  state = {numberOfPresents: 0}

  switch (action.type) {
    case 'INCREASE':
      return {numberOfPresents: state.numberOfPresents + 1}
    default:
      return state;
  }
}
