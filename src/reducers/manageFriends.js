let state = {friends: []}
export function manageFriends(state, action){
  let friendarr = state.friends
  switch(action.type){
    case 'ADD_FRIEND':
      friendarr.push(action.friend)
      return {friends: friendarr}
    case 'REMOVE_FRIEND':
      let result = friendarr.filter(friend => friend.id !== action.id)
      return {friends: result}
    default:
      return state;
  }
}
