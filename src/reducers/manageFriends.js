let state = { friends: [] };
export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return { ...state, friends: [...state.friends, action.friend] };

    // state = { ...state, friends: updatedFriends };
    case "REMOVE_FRIEND":
      debugger;

      return {
        ...state,
        friends: state.friends.filter(friend => friend.id !== action.id)
      };
    // state = { ...state, friends: updatedFriends };
    default:
      return state;
  }
}
