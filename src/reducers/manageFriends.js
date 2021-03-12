export function manageFriends(state, action){
   // returns the existing state if the action's type doesn't match a type in the reducer:
   // adds the friend when type is 'ADD_FRIEND' and the action has a friend property with a name, hometown and id:
   // removes the friend when action type is 'REMOVE_FRIEND' and the action has a property of the friends id to be removed:
   switch(action.type) {
      case 'ADD_FRIEND':
         return {
            friends: [
               ...state.friends, 
               {
                  name: action.friend.name,
                  hometown: action.friend.hometown,
                  id: action.friend.id
               }
            ]
         };
      case 'REMOVE_FRIEND':
         return {
            friends: state.friends.filter((friend) => {
               return friend.id !== action.id;
            })
         };
      default:
         return state;
   }
}
