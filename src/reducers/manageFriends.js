export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { friends: [...state.friends, {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id}]}
    case 'REMOVE_FRIEND':
      let newFriends = [...state.friends]
      const deleteFriend = newFriends.find(e => e.id === action.id)
      const index = newFriends.indexOf(deleteFriend)
      if(index > -1){
        newFriends.splice(index, 1)
      }
      return {friends: newFriends}
    default:
      return { friends: [ { name: 'Avi', hometown: 'NYC', id: 100 }]}
  }
}
