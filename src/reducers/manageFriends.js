export function manageFriends(state, action){
    switch(action.type) {
        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND': {
            console.log(action.id);
            return {friends: state.friends.filter(function (friend) {
                
                return friend.id !== action.id
            })}
            //console.log(friendIndex);
            //return {friends: state.friends.slice(friendIndex)}
        }
            
        default: 
            return state
    }
}
