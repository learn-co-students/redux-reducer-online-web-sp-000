export function manageFriends(state, action){
    switch(action.type) {
        default: 
            return state;
        case "ADD_FRIEND":
            let newObj = {...state};
            newObj.friends.push(action.friend);
            return newObj;
        case "REMOVE_FRIEND":
            let filtered = state.friends.filter(friend => friend.id !== action.id);
            newObj = Object.assign({}, state, {friends: filtered});
            return newObj;

            
            // return state = {friends: filtered}
    }
}
