export function manageFriends(state, action){

    switch(action.type) {
        case "ADD_FRIEND":
            return Object.assign({}, state, friend, {addFriend: state.friends.push(friend)});
      case "REMOVE_FRIEND":
        return Object.assign({}, state, friend, { removeFriend: {
            var array = [...this.state.friends]; // make a separate copy of the array
            var index = array.indexOf(friend.target.value)
            if (index !== -1) {
              array.splice(index, 1);
              this.setState({friends: array});
            }
          },});
        default:
          return state;
      }
}
