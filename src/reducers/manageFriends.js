
const initialState = {
    friends: []
}
export function manageFriends(state=initialState, action){
    switch (action.type) {
        case 'ADD_FRIEND':
          {
              let newState={}
              newState.friends = [...state.friends]
              newState.friends.push(action.friend)
              return newState
          }
        case 'REMOVE_FRIEND':
          {let newState={}
          newState.friends = [...state.friends]
           for (let i=0; i<newState.friends.length; i++) {
               if (newState.friends[i].id === action.id)
               newState.friends.splice(i, 1) 
               console.log(newState)               
           }
           return newState
          }
          default:
          return state;
      }
}
