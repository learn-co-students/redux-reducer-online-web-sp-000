export function manageFriends(state = {friends: []}, action){

    switch (action.type) {
        case "ADD_FRIEND":
            console.log(action.friend)
            let new_state = Object.assign({}, state)
            console.log(new_state.friends)
            new_state.friends.push(action.friend)
            return new_state
        case "REMOVE_FRIEND":
            // let remove_state = Object.assign({}, state)
            // let friend = remove_state.friends.find(friend => friend.id == action.id)
            // let index = remove_state.friends.indexOf(friend)
            // remove_state.friends.slice(0, index - 1)
            // remove_state.friends.slice(index + 1)
            // return remove_state

            const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
                return (
                    {...state,
                        friends: [
                        ...state.friends.slice(0, removalIndex),
                        ...state.friends.slice(removalIndex + 1)
                        ]
                    }
                )
        default:
            return state
    }

    const removalIndex = state.friends.findIndex(friend => friend.id === action.id);
      return (
        {...state,
            friends: [
              ...state.friends.slice(0, removalIndex),
              ...state.friends.slice(removalIndex + 1)
            ]
        }
      )

}
