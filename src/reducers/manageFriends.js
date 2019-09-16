export function manageFriends(state, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          return {friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND':
            const findId = state.friends.findIndex(friend => friend.id === action.id);
            return {friends: [...state.friends.slice(0, findId), ...state.friends.slice(findId + 1)]}
        default:
          return state;
      }
}
