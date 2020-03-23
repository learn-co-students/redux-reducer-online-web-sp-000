export function manageFriends(state, action){
    switch(action.type){
        case 'ADD_FRIEND':
            let newFriends = state.friends.slice();
            newFriends.push(action.friend);
            return { "friends": newFriends }
        case 'REMOVE_FRIEND':
            let i = state.friends.findIndex((friend)  => friend.id === action.id);
            let friends = state.friends.slice();
            friends.splice(i, 1);
            return { "friends": friends }
        default:
            return state;
    }
}
