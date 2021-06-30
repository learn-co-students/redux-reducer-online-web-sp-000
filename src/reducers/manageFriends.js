// let state = {
//   friends: [
//     {
//       name: 'Avi',
//       hometown: 'NYC',
//       id: 100
//     }
//   ],
// };

export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      return ({
        ...state, friends: [...state.friends, action.friend]
      })
    // return Object.assign({}, state, { "friends": [state.friends[0], action.friend] })
    case 'REMOVE_FRIEND':
      // const removeIdx = state.friends.findIndex(friend => friend.id === action.id)
      // const newState = Object.assign({}, state)
      // newState.friends.splice(removeIdx, 1)
      // // return newState
      // return ({ friends: [...newState.friends] })

      return { friends: state.friends.filter(friend => friend.id !== action.id) }
    default:
      return state;
  }
}