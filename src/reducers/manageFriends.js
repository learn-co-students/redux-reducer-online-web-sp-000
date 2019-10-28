export function manageFriends(state, action){
  state = {
      friends: state.friends
  }

  switch (action.type){
    case "ADD_FRIEND":
    let newState= Object.assign({},state); // created a new Object with default state
    newState.friends.push(action.friend);  // added new friend to Friends state
    return newState

    case "REMOVE_FRIEND":
    let friend = state.friends.filter(frend => frend.id !== action.id)
    return {friends: friend}

    default:
      return  state
  }

}
