export function manageFriends(state = {
friends: []


} , action){
 
    switch(action.type){
        case 'ADD_FRIEND' :
     console.log(action)
     return {...state, friends: [...state.friends, action.friend]}
        case 'REMOVE_FRIEND' :
       const removeFriend = state.friends.findIndex(friend => friend.id === action.id)
       return ( 
           {...state, 
        friends : [
        ...state.friends.slice(0, removeFriend),
        ...state.friends.slice(removeFriend + 1)

        ]
        }
       )
      
      default:
          return state;

    }

}

//*line 1.2 * We are initialize state   as a default Object with a key (friend) and set the value empty array.{friends: []
//*line10* We are basically copy original array's key and values with spread operator.
//  its return a new state with this friend object added to the friends array.

///*line12* The findIndex() method returns the index of the first element in the array that satisfies
// the provided testing function. Otherwise, it returns -1, indicating that no element passed the test.
//Found the friend with the matching id
//line 13/17 Thought of in another way, the reducer is really returning a new state with an array of friends that includes everyone except the removed friend.
//The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and
// end represent the index of items in that array. The original array will not be modified.