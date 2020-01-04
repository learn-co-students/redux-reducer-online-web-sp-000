export function manageFriends(state={friends: []}, action){
  switch(action.type) {
    case "ADD_FRIEND":
      let newFriends = state.friends.slice(0)
      newFriends.push(action.friend)
      // console.log(newFriends)
      return {friends: newFriends}
    case "REMOVE_FRIEND":
      let filteredFriends = state.friends.filter(friend => friend.id != action.id)
      // console.log(filteredFriends)
      return {friends: filteredFriends}
    default:
      return state
  }
}
