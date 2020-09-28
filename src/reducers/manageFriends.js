//spread operator (...)

export function manageFriends(state = { friends: [] }, action) { //function w initial state with object with a key friends set to an empty array

    //reducer: handle two actions, ADD FRIEND and REMOVE FRIEND 
    //friend key
    //assigned to object with name hometown and id as keys 
    switch (action.type) {
    case 'ADD_FRIEND': //action object 
        return ({
        ...state, //object spread syntax  ... copy enumerable properties from one object to another
        friends: [
            ...state.friends,
            action.friend  //constructing a new js object 
        ]
        })
    case 'REMOVE_FRIEND': //action object
        const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
        return ({
            ...state,
            friends: [
                ...state.friends.slice(0, removalIndex),
                ...state.friends.slice(removalIndex + 1) //constructing a new js object
            ]
        })
    default:
        return state; //updated state 
    }
}

/*js
  action = {
    type: "ADD_FRIEND",
    friend: {
      name: "Chrome Boi"
      homewtown: "NYC",
      id: 1
    }
  }

    js
  action = {
    type: "REMOVE_FRIEND",
    id: 1
  }

  */