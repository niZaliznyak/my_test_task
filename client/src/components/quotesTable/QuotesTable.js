import React from "react";
import {Button, Table} from "react-bootstrap";
import "./QuotesTable.module.css";

const QuotesTable = ({quotesRates, getStopQuotes, getUpdateQuotes}) => {
    if(quotesRates === undefined) {
        return null;
    }

    return <Table striped bordered hover size="sm">
        <thead>
        <tr>
            <th>#</th>
            <th>ticker</th>
            <th>stop/update</th>
            <th>change</th>
            <th>price</th>
            <th>change_percent</th>
            <th>dividend</th>
            <th>yield</th>
        </tr>
        </thead>
        <tbody>
        {quotesRates.map((elem, index) =>
            <tr key={index}>
                <td>{index + 1}</td>
                <td>{elem.ticker}</td>
                <td>{elem.isStoped
                        ? <Button onClick={() => getUpdateQuotes(elem)} variant="success">Update</Button>
                        : <Button onClick={() => getStopQuotes(elem)} variant="primary">Stop</Button>}
                </td>
                <td>{elem.change}</td>
                <td data-difference={elem.difference}>{elem.price}</td>
                <td>{elem.change_percent}</td>
                <td>{elem.dividend}</td>
                <td>{elem.yield}</td>
            </tr>
        )}
        </tbody>
    </Table>
};

export default QuotesTable;