export function manageFriends(state, action){

    switch(action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}

        case 'REMOVE_FRIEND':
            const newFriends = {...state}
            newFriends.friends = newFriends.friends.filter(f => f.id !==action.id)
            return newFriends
        default:
            return state;
    }
}
