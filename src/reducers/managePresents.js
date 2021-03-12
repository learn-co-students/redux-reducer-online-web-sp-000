export function managePresents(state = { numberOfPresents: 0 }, action){
   switch (action.type) {
      case 'INCREASE':
         // const newState = Object.assign({}, state);
         // newState.numberOfPresents++;
         // return newState
         return { numberOfPresents: state.numberOfPresents + 1 };
      default:
         return state;
   }
}
