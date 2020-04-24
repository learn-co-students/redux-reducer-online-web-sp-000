export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: {...state.friend}}
    }
}
//wanting to overrwrite state.friends data- but with what?


