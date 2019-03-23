export function managePresents(state = {
  numberOfPresents: 0,
}, action) {
  switch (action.type) {
    case "INCREASE":
      //refactored to use the spread operator instead of Object.assign
      return (
        {
          ...state,
          numberOfPresents: state.numberOfPresents + 1
        }

      )
    //this is the older syntax using Object.assign():

    // return Object.assign({}, state, {
    //   numberOfPresents: state.numberOfPresents + 1
    // });

    default:
      return state;
  }
};
