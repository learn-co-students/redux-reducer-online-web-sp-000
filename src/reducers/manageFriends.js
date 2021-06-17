export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case 'ADD_FRIEND':
            return (
                {...state, friends: [
                    ...state.friends, action.friend
                ]}
            )
            // return {friends: state.assign({}, friends, {friend: {
            //     name: action.friend.name,
            //     hometown: action.friend.hometown,
            //     id: action.friend.id
            // }} )};
        case 'REMOVE_FRIEND':
            const removeIdx = state.friends.findIndex(friend => friend.id ===action.id);
            return(
                {...state, friends:[
                    ...state.friends.slice(0, removeIdx),
                    ...state.friends.slice(removeIdx +1)
                ]}
            )
            // return {friends: state.map(friend => {
            //     if(friend.id != action.id){return friend}
            // })}
        default:
            return state
    

    }
}
