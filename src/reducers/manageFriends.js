let state = {friends: []}

export function manageFriends(state, action){

  switch (action.type) {
    case 'ADD_FRIEND':
      const addFriend = {
        name: action.friend.name,
        hometown: action.friend.hometown,
        id: action.friend.id
      }
      const updateState = {...state}
      updateState.friends.push(addFriend)
      return updateState
    case 'REMOVE_FRIEND':
      const id = action.id
        return {
          ...state,
          friends: state.friends.filter(friend => friend.id !== id)
        }
    default:
      return state;
  }
}
