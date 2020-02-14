export function manageFriends(state, action){


    //When our reducer receives "ADD_FRIEND", it should return a new state with this friend object added to
    //the friends array.
    switch(action.type) {
        case 'ADD_FRIEND':
            return {...state, friends: [...state.friends, action.friend]}

    //When removing a friend, instead of an object, the action will include an id key with an integer.
    //Find the friend with the matching id and remove them.
        case 'REMOVE_FRIEND':
            const newFriends = {...state}
            newFriends.friends = newFriends.friends.filter(f => f.id !==action.id)
            return newFriends
        default:
            return state;
    }
}


// LAB ANSWER USING SLICE
// export function manageFriends(state = {
//     friends: [],
//   }, action) {
//     switch(action.type) {
  
//       case "ADD_FRIEND":
//         return (
//           {...state,
//               friends: [
//                 ...state.friends,
//                 action.friend
//               ]
//           }
//       )
  
//       case "REMOVE_FRIEND":
//         const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
//         return (
//           {...state,
//               friends: [
//                 ...state.friends.slice(0, removalIndex),
//                 ...state.friends.slice(removalIndex + 1)
//               ]
//           }
//         )
  
//       default:
//         return state;
  
//     }
//   };
