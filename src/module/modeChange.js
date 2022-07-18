const initialState = {
    backgrounColor: 'white',
    color: 'black'
};

export const toDark = () => {
    return (
        { type: "ToDark" }
    )
}
export const toWhite = () => {
    return (
        { type: 'ToWhite' }
    )
}

const modeChanger = (state = initialState, action) => {
    switch (action.type) {
        case "ToDark":
            return {
                backgrounColor: 'black',
                color: 'white'
            };
        case 'ToWhite':
            return {
                backgrounColor: 'white',
                color: 'black'
            };
        default:
            return state;
    }
}

export default modeChanger;