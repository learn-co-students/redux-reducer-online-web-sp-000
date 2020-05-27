export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      let newState = Object.assign({}, state)
      newState.friends.push(action.friend)
      return newState
    case 'REMOVE_FRIEND':
      //let removeFriend = Object.assign({}, state)
    
      let removalIndex = state.friends.findIndex(friend => friend.id === action.id)
      console.log('first items', state.friends.slice(0, removalIndex))
      console.log('last items', state.friends.slice(removalIndex+1))
      console.log('removal index', state.friends[removalIndex])
      return (
        {...state, friends: [
          ...state.friends.slice(0, removalIndex),
          ...state.friends.slice(removalIndex+1)
        ]}
      )
    
    default:
      return state;
  }
}

// let dog = {id: 1, name: 'scooby', color: 'brown', age: 4};
// if scooby had a birthday, we could write:
// let olderDog = Object.assign({}, dog, {age: dog.age + 1})

//state = {friends: [{name: 'sue', hometown: 'somewhere' id: 1}, {name: 'sue', hometown: 'somewhere' id: 1}]}

