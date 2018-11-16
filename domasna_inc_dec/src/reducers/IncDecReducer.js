const initialState = {
    count: 1
}

const incDec = (state = initialState, action) => {
    switch(action.type) {
        case "INCREMENT": 
            return {
                ...state,
                count: () => {
                    if(this.count<10) {
                        this.count+=1;
                    }
                } 

            }
        case "DECREMENT": 
            return {
                ...state,
                count: () => {
                    if(this.count>1) {
                        this.count-=1;
                    }
                }
            }
        default: return state;
    }        
}    

export default incDec;