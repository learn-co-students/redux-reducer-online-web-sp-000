
let object = { numberOfPresents: 0  }
 
let action = {
    type: "INCREASE"
  }


export function managePresents(state = object, action){
    switch (action.type ){
        case 'INCREASE':
            return Object.assign({}, state, {numberOfPresents: object.numberOfPresents + 1 })
    
    default: 
        return state


    }
}

