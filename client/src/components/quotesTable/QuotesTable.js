import React from "react";
import {Button, Table} from "react-bootstrap";
import {getStopQuotes} from "../../redux/mainReducer";

const QuotesTable = ({quotesRates, getStopQuotes}) => {
    return <Table striped bordered hover size="sm">
        <thead>
        <tr>
            <th>#</th>
            <th>ticker</th>
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
                <td >{elem.ticker}                 <Button onClick={()=>getStopQuotes(elem)} variant="danger">Stop</Button></td>
                <td>{elem.change}</td>
                <td>{elem.price}</td>
                <td>{elem.change_percent}</td>
                <td>{elem.dividend}</td>
                <td>{elem.yield}</td>
            </tr>
        )}
        </tbody>
    </Table>
};

export default QuotesTable;