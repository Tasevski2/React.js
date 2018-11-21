const initialState = {
    to_do_list: [
       "Viktor", "Tasevski", "JBT"
    ]
}


const addToDoReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_DO": 
            return {
                ...state,
                to_do_list: [
                    action.payload,
                    ...state.to_do_list
                ]
            }
        case "REMOVE_TO_DO": 
            return {
                ...state,
                to_do_list: [
                    ...state.to_do_list.filter((todo) => {
                        return todo !== action.payload
                    })
                ]
            }
        default: return state
    }
}


export default addToDoReducer;