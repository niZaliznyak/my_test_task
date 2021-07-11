import React from "react";

const QuotesTable = (props) => {
    return <div className="qutesTable">
       <h2>{JSON.stringify(props.actualQuotes)}</h2>
    </div>
};

export default QuotesTable;