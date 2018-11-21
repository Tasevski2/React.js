export const addToDo = (to_do) => {
    return {
        type: "ADD_TO_DO",
        payload: to_do
    }
}

export const removeToDo = (to_do) => {
    return {
        type: "REMOVE_TO_DO",
        payload: to_do
    }
}