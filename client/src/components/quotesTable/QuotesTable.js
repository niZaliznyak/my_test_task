import React from "react";
import io from "socket.io-client";

const QuotesTable = (props) => {
    React.useEffect(()=> {
        const socket = io.connect('http://localhost:4000');
        socket.emit('start');
        socket.on('ticker', function(response) {
            const res = Array.isArray(response) ? response : [response];
            const json = res.map(item => JSON.stringify(item)).join('\n');
            props.setNewQuotes(res);
        });
    },[]);

    return <div className="qutesTable">
        <h2>{JSON.stringify(props.actualQuotes)}</h2>
    </div>
};

export default QuotesTable;