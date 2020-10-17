export function manageFriends(state = { friends: [] }, action) {
  switch (action.type) {
    case 'ADD_FRIEND':
      state.friends.push(action.friend);
      return { friends: state.friends };
    case 'REMOVE_FRIEND': 
      const removedFriend = state.friends.find(friend => friend.id === action.id);
      const removedFriendIndex = state.friends.indexOf(removedFriend);
      const friendsCopy = [...state.friends];
      if (removedFriendIndex > -1) {
        friendsCopy.splice(removedFriendIndex, 1);
      }
      return { friends: friendsCopy };
    default:
      return state;
  }
}
