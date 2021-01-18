export function manageFriends(state, action){
    let newState = Object.assign({}, state)

    switch(action.type){
        case "ADD_FRIEND":
            newState.friends.push(action.friend)
            return newState
        case "REMOVE_FRIEND":
          
            newState.friends = newState.friends.filter(friend=>friend.id!==action.id)
            console.log(newState)
            return newState
        default:
            return state
    }
}
