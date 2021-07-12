import {connect} from "react-redux";
import QuotesTable from "./QuotesTable";
import {setNewQuotes} from "../../redux/mainReducer";
import io from "socket.io-client";
import React from 'react';

let mapStateToProps = (state) => {
    return {
        actualQuotes: state.mainReducer.actualQuotes,
        prevQuotes: state.mainReducer.prev,
    }
};

let QuotesTableContainer = connect(mapStateToProps, {setNewQuotes})(QuotesTable);

export default QuotesTableContainer;