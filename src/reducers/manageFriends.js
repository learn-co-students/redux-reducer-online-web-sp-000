export function manageFriends(state={friends: []}, action){
    switch (action.type) {
        case "ADD_FRIEND" :
            return {friends: [...state.friends, action.friend]}
        case "REMOVE_FRIEND" :
            const removeFriend = state.friends.findIndex( f => f.id === action.id );
            const newArr = [...state.friends]
            newArr.splice(removeFriend, 1);
            return {friends: newArr}
        default:
            return state;
    }
}
