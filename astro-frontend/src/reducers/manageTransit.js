export default function manageTransit(state = {transits: []}, action) {
    switch(action.type) {
        case "LOAD_TRANSITS":
            return {...state, transits: action.payload}
        case "ADD_TRANSITS":
            return {...state, transits: [...state.transits, action.payload]}
        default:
            return state
    }
}