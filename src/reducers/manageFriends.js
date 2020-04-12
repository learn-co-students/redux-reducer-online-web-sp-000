export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND' :
        return Object.assign({}, state, {
            friends: [
                ...state.friends,
                {
                    name: action.friend.name,
                    hometown: action.friend.hometown,
                    id: action.friend.id
                }
            ]
        })
        case 'REMOVE_FRIEND' :
        const index = state.friends.findIndex(friend => friend.id === 101)
        return Object.assign({}, state, {
            friends: [
                ...state.friends.slice(0, index),
                ...state.friends.slice(index + 1)
            ]
        })
        default:
            return state
    }
}
