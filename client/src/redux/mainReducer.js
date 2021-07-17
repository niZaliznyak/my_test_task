const SET_NEW_QUOTES = "SET_NEW_QUOTES";
const STOP_UPDATE_QUOTES = "STOP_UPDATE_QUOTES";
const GET_UPDATE_QUOTES = "GET_UPDATE_QUOTES";

let initialState = {
    prevQuotes: [],
    actualQuotes: [],
    stopedQuotes: []
};

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_NEW_QUOTES :
            let differenceBetweenPrice = (array, prevArray, stoped) => {
                let newArray = [...array]
                for (let i = 0; i < newArray.length; i++) {
                    if (newArray[i].price < prevArray[i].price) {
                        newArray[i].difference = "down";
                    } else if (newArray[i].price > prevArray[i].price) {
                        newArray[i].difference = "up";
                    } else {
                        newArray[i].difference = "without changes";
                    }
                }
                if (stoped.length != 0) {
                    stoped.forEach(stopedObj => {
                        stopedObj.isStoped = true;
                        let index = newArray.findIndex(elem => elem.ticker == stopedObj.ticker);
                        newArray[index] = stopedObj;
                    });
                }
                return newArray;
            }

            return {
                ...state,
                prevQuotes: state.prevQuotes.length == 0 ? action.payload : [...state.actualQuotes],
                actualQuotes: state.actualQuotes.length != 0 && state.prevQuotes.length != 0 ?
                    differenceBetweenPrice(action.payload, state.actualQuotes, state.stopedQuotes)
                    : action.payload
            }

        case STOP_UPDATE_QUOTES:
            return {
                ...state,
                stopedQuotes: [...state.stopedQuotes, action.payload]
            }
        case GET_UPDATE_QUOTES:
            return {
                ...state,
                stopedQuotes: state.stopedQuotes.filter(elem => elem == action.payload)
            }
        default:
            return state;
    }

}

export const setNewQuotes = (payload) => ({type: SET_NEW_QUOTES, payload});
export const getStopQuotes = (payload) => ({type: STOP_UPDATE_QUOTES, payload});
export const getUpdateQuotes = (payload) => ({type: GET_UPDATE_QUOTES, payload});


