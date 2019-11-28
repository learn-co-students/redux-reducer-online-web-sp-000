let state = {friends: []}

export function manageFriends(state, action){

    switch(action.type) {
        case "ADD_FRIEND":
            let friendsCopy = [...state.friends, action.friend]
            return {friends: friendsCopy}
        case "REMOVE_FRIEND":
            let friendsReduced = state.friends.filter(friend => friend.id !== action.id)
            return {friends: friendsReduced}
        default:
            return state;
        }

}

 