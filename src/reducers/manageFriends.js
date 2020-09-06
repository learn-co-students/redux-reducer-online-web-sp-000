export function manageFriends(state, action){
}
function manageFriends(state = {friends: []}, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {friends: [...state.friends, action.friend]}

    case 'REMOVE_FRIEND':
      return {
        friends: [
          ...state.friends.slice(0, state.friends.findIndex(o => o.id === action.id)),
		  ...state.friends.slice((state.friends.findIndex(o => o.id === action.id) + 1))
          ]
        }
    default:
      return state;
  }
}
