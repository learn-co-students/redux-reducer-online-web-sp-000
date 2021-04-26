export function manageFriends(state, action){
    switch(action.type){
        case "ADD_FRIEND":
            let newFriends = [...state.friends]
            newFriends.push(action.friend)
            return {friends: newFriends}
        case "REMOVE_FRIEND":
            let filteredFriends = state.friends.filter(friend => friend.id !== action.id)
            return {friends: filteredFriends}
        default:
            return state
    }
}
