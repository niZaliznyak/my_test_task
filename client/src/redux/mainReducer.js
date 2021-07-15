const SET_NEW_QUOTES = "SET_NEW_QUOTES";
const STOP_UPDATE_QUOTES = "STOP_UPDATE_QUOTES";

let initialState = {
    prevQuotes: [],
    actualQuotes: [],
    stopedQuotes: []
};

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_NEW_QUOTES :
            let differenceBetweenPrice = (array, prevArray) => {
                let newArray = [...array]
                for (let i = 0; i < newArray.length; i++) {
                    debugger;
                    if (newArray[i].price < prevArray[i].price) {
                        newArray[i].difference = "down";
                    } else if (newArray[i].price > prevArray[i].price) {
                        newArray[i].difference = "up";
                    } else {
                        newArray[i].difference = "without changes";
                    }
                }
                return newArray;
            }
            return {
                ...state,
                prevQuotes: [...state.actualQuotes],
                actualQuotes: state.actualQuotes.length != 0 && state.prevQuotes.length != 0 ?
                    differenceBetweenPrice(action.payload, [...state.actualQuotes])
                    : action.payload
            }

        case STOP_UPDATE_QUOTES:
            return {
                ...state,
                stopedQuotes: [...state.stopedQuotes, action.payload]
            }
        default:
            return state;
    }

}

export const setNewQuotes = (payload) => ({type: SET_NEW_QUOTES, payload});
export const getStopQuotes = (payload) => ({type: STOP_UPDATE_QUOTES, payload});

let differenceBetweenPrice = (newArray, prevArray) => {
    for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].price < prevArray[i].price) {
            newArray[i].difference = "down";
        } else if (newArray[i].price > prevArray[i].price) {
            newArray[i].difference = "up";
        } else {
            newArray[i].difference = "without changes";
        }
    }
    return newArray;
}

