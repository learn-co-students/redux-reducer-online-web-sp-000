export function managePresents(state, action){ //function

    state = {
        numberOfPresents: 0 //default value for state argument with key and value of 0 
    }

    //reducer: receives a type set to INCREASE, return new state increased by 1
    switch (action.type) {
        case 'INCREASE':
            return {numberOfPresents: state.numberOfPresents + 1}
        case 'DECREASE_COUNT':
            return {numberOfPresents: state.numberOfPresents - 1}
        default:
            return state;
        }
}
