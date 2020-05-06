const initialState = {
    friends: []
}

export function manageFriends(state = initialState, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {
                ...state,
                friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            return {friends: state.friends.filter(({ id }) => id !== action.id)}
            
        default: 
            return state
    }
}
