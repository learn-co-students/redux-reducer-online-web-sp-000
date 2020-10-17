export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      state.friends.push(action.friend);
      return { friends: state.friends };
    case "REMOVE_FRIEND":
      const updatedFriends = state.friends.filter(
        (friend) => friend.id !== action.id
      );
      return { friends: updatedFriends };
    default:
      return state;
  }
}
