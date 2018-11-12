import { createStore } from "redux";
import reducer from "../reducers/";

const initialState = {
    technology: "React",
    technologies: [
        "React",
        "Angular",
        "Vue"
    ],
    user: {
        firstName: "Viktor",
        lastName: "Tasevski",
        age: "18"
    }
}

export const store = createStore(reducer,
     initialState
);