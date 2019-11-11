export function manageFriends(state, action){
   switch (action.type) {
       case 'ADD_FRIEND':
           return (
               {
                   friends: [
                       ...state.friends, action.friend
                    ]
                }
            )

       case "REMOVE_FRIEND":
           const IndexOfFriend = state.friends.findIndex(friend => friend.id === action.id);
           return (
               {
                   ...state,
                   friends: [
                       ...state.friends.slice(0, IndexOfFriend),
                       ...state.friends.slice(IndexOfFriend + 1)
                   ]
               }
           )

        default:
            return state
   }
}
