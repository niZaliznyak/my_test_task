import {getStopQuotes, getUpdateQuotes, mainReducer, setNewQuotes} from "./mainReducer";

let testState = {
    prevQuotes: [
        {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '224.60',
            change: '135.52',
            change_percent: '0.93',
            dividend: '0.86',
            'yield': '1.79',
            last_trade_time: '2021-07-19T15:07:41.000Z',
            difference: 'DOWN'
        },
        {
            ticker: 'GOOGL',
            exchange: 'NASDAQ',
            price: '164.03',
            change: '32.82',
            change_percent: '0.39',
            dividend: '0.73',
            'yield': '1.93',
            last_trade_time: '2021-07-19T15:07:41.000Z',
            difference: 'DOWN'
        },
        {
            ticker: 'MSFT',
            exchange: 'NASDAQ',
            price: '162.39',
            change: '136.80',
            change_percent: '0.41',
            dividend: '0.30',
            'yield': '1.92',
            last_trade_time: '2021-07-19T15:07:41.000Z',
            difference: 'UP'
        },
        {
            ticker: 'AMZN',
            exchange: 'NASDAQ',
            price: '217.97',
            change: '179.00',
            change_percent: '0.47',
            dividend: '0.87',
            'yield': '0.19',
            last_trade_time: '2021-07-19T15:07:41.000Z',
            difference: 'DOWN'
        },
        {
            ticker: 'FB',
            exchange: 'NASDAQ',
            price: '125.25',
            change: '31.69',
            change_percent: '0.22',
            dividend: '0.51',
            'yield': '1.98',
            last_trade_time: '2021-07-19T15:03:10.000Z',
            difference: 'DOWN',
            isStoped: true
        },
        {
            ticker: 'TSLA',
            exchange: 'NASDAQ',
            price: '236.02',
            change: '4.57',
            change_percent: '0.55',
            dividend: '0.34',
            'yield': '1.62',
            last_trade_time: '2021-07-19T15:03:10.000Z',
            difference: 'UP',
            isStoped: true
        }
    ],
    actualQuotes: [
        {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '154.00',
            change: '178.35',
            change_percent: '0.57',
            dividend: '0.20',
            'yield': '0.48',
            last_trade_time: '2021-07-19T15:07:46.000Z',
            difference: 'DOWN'
        },
        {
            ticker: 'GOOGL',
            exchange: 'NASDAQ',
            price: '154.51',
            change: '15.64',
            change_percent: '0.83',
            dividend: '0.74',
            'yield': '1.04',
            last_trade_time: '2021-07-19T15:07:46.000Z',
            difference: 'DOWN'
        },
        {
            ticker: 'MSFT',
            exchange: 'NASDAQ',
            price: '180.48',
            change: '52.30',
            change_percent: '0.66',
            dividend: '0.05',
            'yield': '0.19',
            last_trade_time: '2021-07-19T15:07:46.000Z',
            difference: 'UP'
        },
        {
            ticker: 'AMZN',
            exchange: 'NASDAQ',
            price: '159.83',
            change: '8.49',
            change_percent: '0.42',
            dividend: '0.81',
            'yield': '0.49',
            last_trade_time: '2021-07-19T15:07:46.000Z',
            difference: 'DOWN'
        },
        {
            ticker: 'FB',
            exchange: 'NASDAQ',
            price: '125.25',
            change: '31.69',
            change_percent: '0.22',
            dividend: '0.51',
            'yield': '1.98',
            last_trade_time: '2021-07-19T15:03:10.000Z',
            difference: 'DOWN',
            isStoped: true
        },
        {
            ticker: 'TSLA',
            exchange: 'NASDAQ',
            price: '236.02',
            change: '4.57',
            change_percent: '0.55',
            dividend: '0.34',
            'yield': '1.62',
            last_trade_time: '2021-07-19T15:03:10.000Z',
            difference: 'UP',
            isStoped: true
        }
    ],
    stopedQuotes: [
        {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '204.25',
            change: '160.97',
            change_percent: '0.77',
            dividend: '0.61',
            'yield': '1.68',
            last_trade_time: '2021-07-19T16:47:23.000Z',
            isStoped: true
        },
        {
            ticker: 'GOOGL',
            exchange: 'NASDAQ',
            price: '199.78',
            change: '64.28',
            change_percent: '0.50',
            dividend: '0.12',
            'yield': '0.53',
            last_trade_time: '2021-07-19T16:47:23.000Z',
            isStoped: true
        }]
};


let setNewQuotesAction = setNewQuotes([
    {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: '205.06',
        change: '137.37',
        change_percent: '0.03',
        dividend: '0.68',
        'yield': '1.85',
        last_trade_time: '2021-07-19T15:23:52.000Z',
        difference: 'DOWN'
    },
    {
        ticker: 'GOOGL',
        exchange: 'NASDAQ',
        price: '150.69',
        change: '37.62',
        change_percent: '0.73',
        dividend: '0.92',
        'yield': '0.02',
        last_trade_time: '2021-07-19T15:23:42.000Z',
        isStoped: false
    },
    {
        ticker: 'MSFT',
        exchange: 'NASDAQ',
        price: '157.59',
        change: '133.19',
        change_percent: '0.95',
        dividend: '0.63',
        'yield': '1.47',
        last_trade_time: '2021-07-19T15:23:42.000Z',
        isStoped: false
    }
]);
let getStopQuotesAction = getStopQuotes({
    ticker: 'MSFT',
    exchange: 'NASDAQ',
    price: '180.48',
    change: '119.82',
    change_percent: '0.61',
    dividend: '0.81',
    'yield': '1.12',
    last_trade_time: '2021-07-19T16:47:23.000Z',
    isStoped: true
});
let getUpdateQuotesAction = getUpdateQuotes({
    ticker: 'GOOGL',
    exchange: 'NASDAQ',
    price: '199.78',
    change: '64.28',
    change_percent: '0.50',
    dividend: '0.12',
    'yield': '0.53',
    last_trade_time: '2021-07-19T16:47:23.000Z',
    isStoped: true
});

it("new quotes should be added in actualQuotes", () => {

    let newState = mainReducer(testState, setNewQuotesAction);

    expect(newState.actualQuotes.length).toBe(3);
});
it("new quotes should have expected difference from previous", () => {

    let newState = mainReducer(testState, setNewQuotesAction);

    expect(newState.actualQuotes[0].difference).toBe('UP');
    expect(newState.actualQuotes[1].difference).toBe('DOWN');
    expect(newState.actualQuotes[2].difference).toBe('DOWN');
});
it("prev quotes should be moved to prevQuotes", () => {

    let newState = mainReducer(testState, setNewQuotesAction);

    expect(newState.prevQuotes).toStrictEqual(testState.actualQuotes);
});

it("selected qoutes must be added to stopedQuotes", () => {

    let newState = mainReducer(testState, getStopQuotesAction);

    expect(newState.stopedQuotes.length).toBe(3);
    expect(newState.stopedQuotes[2]).toStrictEqual({
        ticker: 'MSFT',
        exchange: 'NASDAQ',
        price: '180.48',
        change: '119.82',
        change_percent: '0.61',
        dividend: '0.81',
        'yield': '1.12',
        last_trade_time: '2021-07-19T16:47:23.000Z',
        isStoped: true
    });
});



