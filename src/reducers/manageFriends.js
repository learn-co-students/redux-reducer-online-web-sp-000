let state = {friends: []}
let action = {
    type: "ADD_FRIEND",
    friend: {
      name: "Chrome Boi",
      homewtown: "NYC",
      id: 1
    }
  }

export function manageFriends(state, action){

    switch (action.type) {
      case 'ADD_FRIEND':
         return {friends: [...state.friends, {...action.friend}]}

        break;
        case 'REMOVE_FRIEND':
          return {friends: state.friends.filter(friend => friend.id !== action.id)}
          break;
      default:
        return state;
    }
}


// function changeState(state, action){

// }
