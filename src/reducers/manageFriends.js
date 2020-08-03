export function manageFriends (state = { friends: [] }, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      const arr = []
      state.friends.forEach(f => {
        if (f.id !== action.id) {
          arr.push(f)
        }
      })
      return { ...state, friends: arr }
    default:
      return state
  }
}
