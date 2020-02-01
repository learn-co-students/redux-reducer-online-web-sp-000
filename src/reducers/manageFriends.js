export function manageFriends(state, action){
    //state = {friends: []}
    switch (action.type){
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}
            
        case 'REMOVE_FRIEND':
            //const removalIndex = state.friends.findIndex(friend => friend.id === action.id)
            const newState = {...state }
            newState.friends = newState.friends.filter(f => f.id !== action.id )
            return newState
            // return ({...state,
            //             friends: [
            //                 ...state.friends.slice(0, removalIndex),
            //                 ...state.friends.slice(removalIndex + 1)
            //             ]})
        default:
            return state;
    }
}
