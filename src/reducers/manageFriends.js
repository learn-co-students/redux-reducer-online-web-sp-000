export function manageFriends(state={friends:[]}, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return ({...state,friends: [...state.friends,action.friend]})
    case "REMOVE_FRIEND":
    //   const friendID = (element) => element.id === action.id;
    //   console.log(state.friends.findIndex(friendID));
    const friendID = state.friends.findIndex(element => element.id === action.id);
      return ({...state,friends: [...state.friends.slice(0, friendID),...state.friends.slice(friendID + 1)]})
    default:
      return state;
  }
}

