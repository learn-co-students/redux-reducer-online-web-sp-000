
let state = {numberOfPresents: 0}
let action = {type: 'INCREASE'}

export function managePresents(state, action){
    switch (action.type){
        case 'INCREASE':
            return {count: state.count + 1} 
        default: 
            return state; 
    }
}
