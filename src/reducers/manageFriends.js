export function manageFriends(state, action){
  let newFriendsArray = state.friends.slice();
  switch (action.type) {
    case 'ADD_FRIEND':
      newFriendsArray.push(action.friend);
      return {friends: (newFriendsArray)};
    case 'REMOVE_FRIEND':
      let friendToBeRemoved = newFriendsArray.find(friend => friend.id === action.id);
      newFriendsArray.splice(newFriendsArray.indexOf(friendToBeRemoved), 1);
      return {friends: newFriendsArray};
    default:
      return state;
  }
}

let state = { friends: [] };
