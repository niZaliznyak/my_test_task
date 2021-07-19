import {render, screen} from "@testing-library/react";
import QuotesTable from "./QuotesTable";

let quotesForTest = [{"ticker":"AAPL","exchange":"NASDAQ","price":"258.05","change":"175.31","change_percent":"0.17","dividend":"0.90","yield":"0.95","last_trade_time":"2021-07-19T12:11:23.000Z"}
    , {"ticker":"GOOGL","exchange":"NASDAQ","price":"112.00","change":"197.18","change_percent":"0.43","dividend":"0.35","yield":"0.86","last_trade_time":"2021-07-19T12:11:23.000Z"}]

it("AAPL ticker in QuotesTable", () => {
   render(<QuotesTable quotesRates={quotesForTest}/>);
   expect(screen.getByText("AAPL")).toBeInTheDocument();
});

it("Bootstrap table is render in QuotesTable", () => {
    render(<QuotesTable quotesRates={quotesForTest}/>);
    expect(screen.getByRole("table")).toBeInTheDocument();
});

