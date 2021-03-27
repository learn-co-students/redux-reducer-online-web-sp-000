export function managePresents(prevState = {numberOfPresents: 0}, action){
    if (action.type === 'INCREASE') {
        return {numberOfPresents: prevState.numberOfPresents + 1}
    }
    return prevState
}
