export function manageFriends(state, action){
  console.log(action.friend)
  switch (action.type) {
    case 'ADD_FRIEND':
      return {...state, friends: [...state.friends, action.friend]}
    case 'REMOVE_FRIEND':
      return {...state, friends: state.friends.filter(f => f.id !== action.id)}
    default:
      return {friends: state.friends}
  }

}
