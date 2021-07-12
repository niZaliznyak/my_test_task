

const SET_NEW_QUOTES = "SET_NEW_QUOTES";

let initialState = {
    prevQuotes: [],
    actualQuotes: ["aaa"]

};

export const mainReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_NEW_QUOTES :
            return {
                ...state,
                prevQuotes: [...state.actualQuotes],
                actualQuotes: action.payload
            }
        default:
            return state;
    }

}

export const setNewQuotes = (payload) => ({type: SET_NEW_QUOTES, payload});


