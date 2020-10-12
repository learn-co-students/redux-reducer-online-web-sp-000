// In managePresents.js, write a function called managePresents() that takes in the previous state and an action as its argument. Set an default value for the state argument - an object with a key, numberOfPresents, assigned to 0
// Actions passed into this reducer will only have a type attribute,
// ```js
// action = {
//     type: "INCREASE"
//   }
// ```
// If the reducer receives a type set to "INCREASE", return a new state where the value of numberOfPresents is increased by one

export function managePresents(state = {
    numberOfPresents: 0,
  }, action) {
    switch(action.type) {
  
      case "INCREASE":
        return Object.assign({}, state, {
          numberOfPresents: state.numberOfPresents + 1
        });
  
      default:
        return state;
    }
};
