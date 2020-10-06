export function managePresents(state, action){
    switch(action.type) {
        default: 
            return state = {numberOfPresents: 0};
        case "INCREASE":
            return state = {numberOfPresents: state.numberOfPresents + 1};
    }
}
