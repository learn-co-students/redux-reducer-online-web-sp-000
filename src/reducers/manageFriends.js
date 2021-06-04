export function manageFriends(state = {friends: []}, action){
  switch(action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends].concat([action.friend])}
    case "REMOVE_FRIEND":
      const index = state.friends.findIndex(friend => friend.id === action.id)
      return {friends: state.friends.filter((friend, idx) => idx !== index)}
    default:
      return state
  }
}
