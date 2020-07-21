export function manageFriends(state, action) {
    switch (action.type) {

        case 'ADD_FRIEND':
            return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            return {friends: state.friends.filter(friend =>{
                return friend.id != action.id
            })}
            //return friends where id is NOT equal to action id
    default:
        return state
    }
}
