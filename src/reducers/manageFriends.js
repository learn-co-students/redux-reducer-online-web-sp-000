import { stat } from "fs";

export function manageFriends(state, action) {
  switch (action.type) {
    case "ADD_FRIEND":
      return {
        ...state,
        friends: [
          ...state.friends,
          {
            name: action.friend.name,
            hometown: action.friend.hometown,
            id: action.friend.id
          }
        ]
      };
    case "REMOVE_FRIEND":
      let newFriends = [];
      state.friends.forEach(friend => {
        if (friend.id !== action.id) {
          newFriends.push(friend);
        }
      });

      return { ...state, friends: newFriends };
    default:
      return state;
  }
}
