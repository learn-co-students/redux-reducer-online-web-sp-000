export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            state.friends.push(action.friend)
            return state
        case 'REMOVE_FRIEND':
            let newState = {...state, friends: state.friends.filter(friend => friend.id !== action.id)}
            return newState
        default:
            return state;
    }
}
