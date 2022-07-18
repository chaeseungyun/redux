const initialState = {time : 'light'};

export const toNight = () => {
    return (
        {type : "dayToNight"}
    )
}
export const toDay = () => {
    return (
        {type : 'nightToDay'}
    )
}

const modeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'dayToNight':
            return {time : 'black'};
        case 'nightToDay':
            return {time : 'light'};
        default:
            return state;
    }
}

export default modeReducer;