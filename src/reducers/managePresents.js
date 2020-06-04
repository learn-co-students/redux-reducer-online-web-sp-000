export function managePresents(state, action){
	switch (action.type) {
		case "INCREASE":
			return {numberOfPresents: state.numberOfPresents + 1}
		default:
			return state
	}

	// switch (action.type) {
	// 	case "ADD_FRIEND":
	// 		return {friend: action.friend}
	// 	default: 
	// 		return state
	// }
}

// let state = 