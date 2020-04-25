export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return ({...state, friends: [...state.friends, action.friend ] })
        case 'REMOVE_FRIEND':
            const badFriendIndex = state.friends.findIndex(friend => friend.id === action.id)
            return ( 
                {...state, 
                    friends: [
                    ...state.friends.slice(0, badFriendIndex), //this returns what's before badfriend
                    ...state.friends.slice(badFriendIndex + 1) //this returns what's after badfriend--together, returns rest of array, i think?
                ]}
                )    
        default:
            return state; 
    }
}


