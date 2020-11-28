export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {
                friends: state.friends.concat(action.friend)
            };
        case 'REMOVE_FRIEND':
            let newList = state.friends.filter(friend => friend.id !== action.id);
            return {
                friends: newList
            };
        default:
            return state;
    }
}
