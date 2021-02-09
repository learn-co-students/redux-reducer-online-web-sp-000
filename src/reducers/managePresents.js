export function managePresents(state, action){
    let presentsObj = {
        numberOfPresents: 0
    }

    switch(action.type){
        case 'INCREASE':
            return {numberOfPresents: presentsObj.numberOfPresents + 1}
        default: 
            return presentsObj;
    }

}

// function changeState(state, action){
//     switch (action.type) {
//       case 'INCREASE_COUNT':
//         return {count: state.count + 1}
//       default:
//         return state;
//     }
//   }
