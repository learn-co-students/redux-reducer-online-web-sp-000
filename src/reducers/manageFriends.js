export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND": {
      const newState = { ...state };

      newState.friends.push({
        name: action.friend.name,
        hometown: action.friend.hometown,
        id: action.friend.id,
      });
      return newState;
    }
    case "REMOVE_FRIEND": {
      const newFriends = state.friends.filter(
        (friend) => friend.id !== action.id
      );
      const newState = { ...state, friends: newFriends };
      return newState;
    }
    default:
      return state;
  }
}
