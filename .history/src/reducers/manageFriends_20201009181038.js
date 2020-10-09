export function manageFriends(state, action){
      switch(action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend);
      return state;
    case 'REMOVE_FRIEND':
      return {friends: state.friends.filter((value, index, arr) => {return value.id != action.id})}
    default:
      return state;
  }
}

// no need