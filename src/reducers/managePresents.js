
const DEFAULT_PRESENTS = {numberOfPresents: 0 }
export function managePresents(state = DEFAULT_PRESENTS, action){
  switch(action.type) {
    case "INCREASE":
      return {...state, numberOfPresents: state.numberOfPresents + 1};
    default:
      return state;
  }

}
