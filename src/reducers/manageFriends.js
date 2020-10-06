export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            {friends: state.friends.push(action.friend)}
            return state
        case 'REMOVE_FRIEND':
            let newFriends = state.friends.filter(friend => friend.id != action.id)
            return {friends: newFriends}
        default:
            return state
    }
}

let state = {
    friends: []
}
