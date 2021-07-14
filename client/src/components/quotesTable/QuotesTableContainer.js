import React from 'react';
import QuotesTable from "./QuotesTable";
import io from "socket.io-client";
import {connect, useDispatch, useSelector} from "react-redux";
import {setNewQuotes} from "../../redux/mainReducer";

let QuotesTableContainer = ({quotesRates, setNewQuotes}) => {

    React.useEffect(() => {
        const socket = io.connect('http://localhost:4000');
        socket.emit('start');
        socket.on('ticker', function (response) {
            //const res = Array.isArray(response) ? response : [response];
            //const json = res.map(item => JSON.stringify(item)).join('\n');
            setNewQuotes(response);
        });
    }, []);

    return <QuotesTable quotesRates={quotesRates}/>
}

let mapDispatchToProps = (state) => ({
    quotesRates: state.mainReducer.actualQuotes
});


export default connect(mapDispatchToProps, {setNewQuotes})(QuotesTableContainer);