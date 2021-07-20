import React from 'react';
import QuotesTable from "./QuotesTable";
import {connect} from "react-redux";
import {getConnectTo_io, getStopQuotes, getUpdateQuotes} from "../../redux/mainReducer";

let QuotesTableContainer = ({quotesRates, getStopQuotes, getUpdateQuotes, getConnectTo_io}) => {

    React.useEffect(() => {
        getConnectTo_io();
    }, [getConnectTo_io]);

    return <QuotesTable quotesRates={quotesRates} getStopQuotes={getStopQuotes} getUpdateQuotes={getUpdateQuotes}/>
}

let mapDispatchToProps = (state) => ({
    quotesRates: state.mainReducer.actualQuotes
});


export default connect(mapDispatchToProps, {getConnectTo_io, getStopQuotes, getUpdateQuotes})(QuotesTableContainer);