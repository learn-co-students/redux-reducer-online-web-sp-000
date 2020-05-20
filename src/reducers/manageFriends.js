let state = {friends: []}
export function manageFriends(state, action){
    let friendArray = state.friends
    switch (action.type) {
        case 'ADD_FRIEND':
            friendArray.push(action.friend)
            return {friends:friendArray}
        case 'REMOVE_FRIEND':
            let result = friendArray.filter(friend => friend.id !== action.id)
            return {friends: result}
    default:
            return state;

    }
}
