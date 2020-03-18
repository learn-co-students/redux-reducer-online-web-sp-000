export function manageFriends(state = {friends:[]}, action){
    if (action.type === "ADD_FRIEND"){
        let newFriends = state.friends 
        newFriends.push(action.friend)
        return state = {friends: newFriends}
    } else if (action.type === "REMOVE_FRIEND") {
        return state = {friends: state.friends.filter((friend) => {
            return friend.id !== action.id
        })}
    }
    return state 
}
