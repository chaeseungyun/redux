const initialState = 0;

const INCREASE = 'increase';
const DECREASE = 'decrease';

export const increaseCount = () => {
    return(
        {type:INCREASE}
    )
}
export const decreaseCount = () => {
    return(
        {type:DECREASE}
    )
}

const countReducer = (state=initialState, action) => {
    switch (action.type) {
        case INCREASE :
            return state + 1;
        case DECREASE :
            return state - 1;
        default:
            return state;
    }
}

export default countReducer;