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
            return {
                ...state,
                prevQuotes: [...state.actualQuotes],
                actualQuotes: action.payload
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


