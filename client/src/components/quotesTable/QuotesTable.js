import React from "react";

const QuotesTable = ({quotesRates}) => {
    console.log(quotesRates);
    return <div className="qutesTable">
        <ul>
        {quotesRates.map((elem, index) =>
            <li key={index}>ticker: {elem.ticker} price: {elem.price}</li>
        )}
        </ul>
    </div>
};

export default QuotesTable;