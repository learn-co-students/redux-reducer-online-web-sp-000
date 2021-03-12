export function managePresents(state = { numberOfPresents: 0 }, action){
   switch (action.type) {
      case 'INCREASE':
         const newState = Object.assign({}, state);
         newState.numberOfPresents++;
         return newState
      default:
         return state;
   }
}
