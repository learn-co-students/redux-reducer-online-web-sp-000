export function manageFriends(state, action){

    switch (action.type){
        case 'ADD_FRIEND':
            let newFriend = action.friend
            let newFriends = Object.assign({}, state, {friends: [...state.friends, action.friend]} )
            return newFriends
        case 'REMOVE_FRIEND':
            let newState = {...state, friends: state.friends.filter(friend => friend.id != action.id )}
            return newState
        default:
            return state
    }
}
