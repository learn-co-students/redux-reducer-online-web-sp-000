export function manageFriends(state={friends: []}, action){
  if (action.type === "ADD_FRIEND") {
    {friends: state.friends.push(action.friend)}
  } else if (action.type === "REMOVE_FRIEND") {
    const index = state.friends.findIndex(x => x.id === action.id);
    return ({
      ...state,
      friends: [...state.friends.slice(0, index), ...state.friends.slice(index + 1)]
    })
  }
  return state;
}
