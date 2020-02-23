export function manageFriends(state, action){
  switch(action.type){
    case "ADD_FRIEND":
      let a = state.friends
      return a.push(action.friends)
    case "REMOVE_FRIEND":
      return {state.friends.filter(f=>f.id!=(action.id))}
    default: return state
  }
}
