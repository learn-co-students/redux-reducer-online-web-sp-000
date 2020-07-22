export function manageFriends(state = {friends: []}, action){
  const newArray = state.friends.slice()
  switch (action.type) {
    case 'ADD_FRIEND':
      newArray.push(action.friend)
      return {friends: newArray}
    case 'REMOVE_FRIEND':
      let newerArray = newArray.filter(friend => friend.id != action.id)
      return {friends: newerArray}
    default:
      return state;
  }
}
