export function manageFriends(state = {friends: []}, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {
                friends: [...state.friends, {name: action.friend.name, hometown: action.friend.hometown, id: action.friend.id}]
            }
        case 'REMOVE_FRIEND':
            const i = state.friends.findIndex(e => e.id === action.id)
            return {
                friends: [...state.friends.slice(0, i), ...state.friends.slice(i+1)]
            }
        default:
            return state
    }
}
