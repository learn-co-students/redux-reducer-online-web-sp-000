export function manageFriends(state = { friends: [] }, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return { ...state, friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      return 
  }
}

// how can the spread operator be used, and what can we use to remove ONE object from a collection 
