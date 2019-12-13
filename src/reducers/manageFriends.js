
let state = {
    friends: []
}



export function manageFriends(state, action){
    switch(action.type){
        case "ADD_FRIEND":
            return (
                {...state,
                    friends: [...state.friends, action.friend]
                }
            )
        case "REMOVE_FRIEND":
            let removeThisFriend = state.friends.find(friend => friend.id === action.id)
            let indexToRemove = state.friends.indexOf(removeThisFriend)
            return (
                {...state,
                friends: [...state.friends.slice(0, indexToRemove), ...state.friends.slice(indexToRemove + 1)]}
            )
        default:
            return state
    }
}


// (
//     {...state,
//     friends: [...state.friends.splice(index, 1)]}
// )