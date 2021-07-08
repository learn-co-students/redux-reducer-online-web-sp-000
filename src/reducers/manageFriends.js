export function manageFriends(state, action) {

  switch(action.type) {
    case "ADD_FRIEND":
      return { friends: [...state.friends, action.friend] }
    case "REMOVE_FRIEND":
      const friends = [...state.friends]
      let i = friends.findIndex(e => e.id === action.id)
      friends.splice(i, 1)
      return { friends: friends }
    default:
      return state
  }

}
