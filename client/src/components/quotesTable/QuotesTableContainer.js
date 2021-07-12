import React from 'react';
import QuotesTable from "./QuotesTable";
import io from "socket.io-client";
import {useDispatch, useSelector} from "react-redux";
import {setNewQuotes} from "../../redux/mainReducer";

let QuotesTableContainer = () => {
    let dispatch = useDispatch();

    React.useEffect(() => {
        const socket = io.connect('http://localhost:4000');
        socket.emit('start');
        socket.on('ticker', function (response) {
            //const res = Array.isArray(response) ? response : [response];
            //const json = res.map(item => JSON.stringify(item)).join('\n');
            dispatch(setNewQuotes(response));
        });
    }, []);

    let quotesRates = useSelector(elem => elem.mainReducer.actualQuotes);

    return <QuotesTable quotesRates={quotesRates}/>
}

export default QuotesTableContainer;