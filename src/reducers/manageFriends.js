export function manageFriends(state, action){
    switch (action.type) {
        case "ADD_FRIEND":
            return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND":
            const friends = state.friends.filter(f => f.id != action.id)
            return {friends: friends}
        default:
            return state
    }
}