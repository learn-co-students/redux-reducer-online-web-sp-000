export function manageFriends(prevState, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...prevState, friends: [...prevState.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {...prevState, friends: [...prevState.friends.filter(friend => friend.id !== action.id)]}
    default:
      return prevState
  }
}
