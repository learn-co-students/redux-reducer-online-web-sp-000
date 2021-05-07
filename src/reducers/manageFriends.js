export function manageFriends(state, action){
    switch(action.type){
        case  'ADD_FRIEND':


            return {friends: [ ...state.friends, {...action.friend}] }
       
        case 'REMOVE_FRIEND':
          let old = state.friends.slice();
        
        let newA = findInArray(action.id, old)
   
        return {friends: newA}
             
            
        
       default:
           return {friends: [...state.friends]}
    }
}





function findInArray(id, arrayOfObjects){
    var newA = arrayOfObjects.slice()
    for(let i = arrayOfObjects.length -1; i >= 0; --i){
        console.log(arrayOfObjects[i])
        if(arrayOfObjects[i].id == id){
            console.log(i)
            newA.splice(i, 1)
        }
    }
   return newA;
}



function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}
