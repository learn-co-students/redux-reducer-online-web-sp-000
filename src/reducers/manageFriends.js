export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          return {friends: state.friends + 1}
        case 'REMOVE_FRIEND':
          return {friends: state.friends - 1}
        default:
          return state;
    } 
}

let state = {
    friends: []
}

let increase = {
    type: "ADD_FRIEND",
    friend: {
        name: "Chrome Boi", 
        hometown: "NYC",
        id: 1
    }
}

let decrease = {
    type: "REMOVE_FRIEND", 
    id: 1
}