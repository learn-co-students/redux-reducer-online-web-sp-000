export function manageFriends(state, action){
   // returns the existing state if the action's type doesn't match a type in the reducer:
   // adds the friend when type is 'ADD_FRIEND' and the action has a friend property with a name, hometown and id:
   // removes the friend when action type is 'REMOVE_FRIEND' and the action has a property of the friends id to be removed:
   switch(action.type) {
      case 'ADD_FRIEND':
         // When action has a friend property, add them with state's friends list to new object, return it
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
         // When action type remove and action has friend property, return new object without that friend
         // Traverse friends array until friend to remove is found. Remove friend and return new friends obj
         // return {
         //    friends: state.friends.map((friend) => {
         //       return friend.id !== action.friend.id;
         //    })
         // };
      default:
         return state;
   }
}
