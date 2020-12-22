export function managePresents(action, state = {numberOfPresents: 0}){
  if (action.type === 'INCREASE') {
    return state.numberOfPresents += 1;
  }
}
