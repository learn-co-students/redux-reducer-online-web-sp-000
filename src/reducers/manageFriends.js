export function manageFriends(state, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      let friendsArray = [...state.friends]
      friendsArray.push(action.friend)
      return {friends: friendsArray}
    case 'REMOVE_FRIEND':
      let badFriendArray = [...state.friends]
      return {friends: badFriendArray.filter(f => f.id !== action.id)}
    default:
      return state;
  }
}
