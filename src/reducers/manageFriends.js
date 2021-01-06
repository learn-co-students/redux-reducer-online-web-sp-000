export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return {
        ...state,
        {
          name: action.friend.name,
          hometown: action.friend.hometown,
          id: action.friend.id
        }
      }

  }
}
