export function managePresents(state, action){
    if(action.type === "INCREASE"){
        return {numberOfPresents: state.numberOfPresents + 1}
    }
    return state;
}

let state = { numberOfPresents: 0 };
let action = { type: "INCREASE"}