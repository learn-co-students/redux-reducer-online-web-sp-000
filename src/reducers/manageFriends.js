export function manageFriends(state={friends: []}, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]};
    case "REMOVE_FRIEND":
      let lessFriends = [...state.friends];
      for (let i = 0; i < state.friends.length; i++) {
        if (state.friends[i].id === action.id) {
          lessFriends.splice(i, 1)
        }
      }
      return {friends: lessFriends};
    default:
      return state;
  }
}
