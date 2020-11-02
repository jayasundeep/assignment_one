const defaultStates = {
    checkBox : [],
    radioButtonValue : ""
}

const statesReducer = (state = defaultStates, action = {}) => {
    // console.log(state);
    // console.log(action);
    switch(action.type) {
        case 'GET_STATE':
            return state
        case 'SET_CHECKBOX_STATE':
            let present = false;
            let temp = [];
            state.checkBox.map((x) => {
                if(x === action.val){
                    present = true;
                    return x;
                }else{
                    temp.push(x);
                    return x;
                }
            })

            if(!present){
                temp.push(action.val)
                return {
                    ...state,
                    checkBox : temp
                };
            }else{
                return {
                    ...state,
                    checkBox : temp
                };
            }
        case 'SET_RADIO_BTN':
            // console.log(action);
            return {
                ...state,
                radioButtonValue : action.val
            }
        default :
            return state
    }
}

export default statesReducer;