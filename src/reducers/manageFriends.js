export function manageFriends(state, action){
    switch (action.type) {
        case 'REMOVE_FRIEND':
            for (let i = 0; i < state.friends.length; i++) {
                if (state.friends[i].id === action.id) {
                    return (
                        {...state, friends: [...state.friends.slice(0, i), ...state.friends.slice(i + 1)]}
                    )
                }
            }
        case 'ADD_FRIEND':
            return (
                {...state, friends: [...state.friends, action.friend]}
            )
        default:
            return state
    }
}
