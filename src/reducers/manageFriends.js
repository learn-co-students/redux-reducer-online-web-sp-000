export function manageFriends(state = {friends: []}, action){
    switch (action.type) {
        case 'ADD_FRIEND':
            return {friends: {...state.friends}}
    }
}




// export function managePresents(state = {numberOfPresents: 0}, action) {
//     switch (action.type) {
//         case 'INCREASE':
//             return {numberOfPresents: state.numberOfPresents + 1} 
//         default: 
//             return state;        
//     }
// }

