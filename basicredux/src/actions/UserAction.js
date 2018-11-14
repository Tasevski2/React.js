export const fetchUser = () => {
    return {
        type: "GET_USER",
        payload: {
            name: "Viktor",
            email: "viktor@hotmail.com"
        }
    }
}

export const Cv = () => {
    return {
        type: "CV",
        payload: {
            name: "Viktor",
            email: "vikto@hotmail.com",
            age: "18"
        }
    }
}