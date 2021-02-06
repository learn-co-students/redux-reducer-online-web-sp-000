export function manageFriends( state={numberOfPresents:0}, action){
	switch(action.type) {
		case 'ADD_FRIEND':
			return {...state, friends: [...state.friends, action.friend]};
		case 'REMOVE_FRIEND':
			return {friends: [...state.friends.filter(friend => friend.id != action.id)]};
		default:
			return state;
	}
}

//If the reducer receives a type set to "INCREASE", 
//return a new state where the value of numberOfPresents is increased by one.