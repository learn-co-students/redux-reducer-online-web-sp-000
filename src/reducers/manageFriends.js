let action = {type: 'INCREASE_COUNT'}
export function manageFriends(state, action){
    // console.log(state)
    let intialState = {
        friends: [
            {
                name: "Avi",
                hometown: "NYC",
                id: 100,
            }
        ]
    }

    switch(action.type) {
        case 'ADD_FRIEND': 
        return (
            {friends: [...state.friends,
                {
                    name: "Joe",
                    hometown: "Boston",
                    id: 101
                }
            ]
            }
        )

        case "REMOVE_FRIEND":
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
                return state;
            }
}
