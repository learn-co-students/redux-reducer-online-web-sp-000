export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':

    // state = { friends: [ {firend1}, {firend2}]}
    return { friends: [ ...state.friends, action.friend] }
    break;
    case 'REMOVE_FRIEND':
    //CODE
    return { friends: state.friends.filter( object => {
      return object.id !== action.id
    })}
    break;
    default:
    return state;
  }
}
