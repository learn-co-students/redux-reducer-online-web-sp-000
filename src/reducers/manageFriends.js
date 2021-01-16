export function manageFriends(state={friends: []}, action){
  if (action.type === 'ADD_FRIEND') {
    return {...state, friends: [...state.friends, action.friend] }
  } else if (action.type === 'REMOVE_FRIEND') {
    const foundFriend = state.friends.find(friend => (friend.id === action.id));
    const foundFriendIndex = state.friends.indexOf(foundFriend)
    const friends = state.friends.slice(0, foundFriendIndex).concat(state.friends.slice(foundFriendIndex + 1));
    return {...state, friends: friends  }
  } else {
    return state
  }
}
