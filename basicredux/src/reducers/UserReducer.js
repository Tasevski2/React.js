const initialState = {
    user: {},
    cv: {}
}

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_USER":
            return {
                ...state,
                user: action.payload
            }
        case "CV": 
            return {
                ...state,
                cv: action.payload
            }
        default: return state;
    }
}

export default userReducer;