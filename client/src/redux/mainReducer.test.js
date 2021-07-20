import {getStopQuotes, getUpdateQuotes, mainReducer, setNewQuotes} from "./mainReducer";

describe("test setNewQuotes action creator", () => {

    it("new quotes should be added in actualQuotes", () => {
        let testState = {
            prevQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '285.94',
                    change: '193.32',
                    change_percent: '0.33',
                    dividend: '0.33',
                    'yield': '0.28',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '139.40',
                    change: '171.08',
                    change_percent: '0.37',
                    dividend: '0.64',
                    'yield': '0.77',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '109.41',
                    change: '84.54',
                    change_percent: '0.12',
                    dividend: '0.59',
                    'yield': '1.85',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '203.58',
                    change: '144.53',
                    change_percent: '0.19',
                    dividend: '0.12',
                    'yield': '1.10',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '263.30',
                    change: '61.73',
                    change_percent: '0.79',
                    dividend: '0.67',
                    'yield': '0.71',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '186.52',
                    change: '24.20',
                    change_percent: '0.47',
                    dividend: '0.65',
                    'yield': '0.83',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                }
            ],
            actualQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '123.71',
                    change: '159.38',
                    change_percent: '0.52',
                    dividend: '0.77',
                    'yield': '1.04',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '227.55',
                    change: '74.97',
                    change_percent: '0.93',
                    dividend: '0.08',
                    'yield': '0.12',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '120.50',
                    change: '158.18',
                    change_percent: '0.45',
                    dividend: '0.05',
                    'yield': '1.59',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '152.94',
                    change: '35.87',
                    change_percent: '0.70',
                    dividend: '0.40',
                    'yield': '0.58',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '229.37',
                    change: '101.42',
                    change_percent: '0.36',
                    dividend: '0.72',
                    'yield': '1.53',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '178.69',
                    change: '0.12',
                    change_percent: '0.71',
                    dividend: '0.99',
                    'yield': '1.52',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                }
            ],
            stopedQuotes: []
        };
        let testPayload = [
            {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '268.09',
                change: '116.59',
                change_percent: '0.74',
                dividend: '0.21',
                'yield': '1.38',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'GOOGL',
                exchange: 'NASDAQ',
                price: '288.50',
                change: '41.66',
                change_percent: '0.53',
                dividend: '0.93',
                'yield': '1.02',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'MSFT',
                exchange: 'NASDAQ',
                price: '263.92',
                change: '14.78',
                change_percent: '0.88',
                dividend: '0.56',
                'yield': '0.98',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'AMZN',
                exchange: 'NASDAQ',
                price: '110.03',
                change: '115.70',
                change_percent: '0.49',
                dividend: '0.44',
                'yield': '0.91',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'FB',
                exchange: 'NASDAQ',
                price: '127.83',
                change: '72.22',
                change_percent: '0.45',
                dividend: '0.51',
                'yield': '1.69',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'TSLA',
                exchange: 'NASDAQ',
                price: '156.16',
                change: '79.34',
                change_percent: '0.66',
                dividend: '0.40',
                'yield': '1.38',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            }
        ];
        let newState = mainReducer(testState, setNewQuotes(testPayload));

        expect(newState.actualQuotes[0]).toStrictEqual({
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '268.09',
            change: '116.59',
            change_percent: '0.74',
            dividend: '0.21',
            'yield': '1.38',
            last_trade_time: '2021-07-20T09:20:46.000Z',
            difference: 'UP'
        });
        expect(newState.actualQuotes[1]).toStrictEqual({
            ticker: 'GOOGL',
            exchange: 'NASDAQ',
            price: '288.50',
            change: '41.66',
            change_percent: '0.53',
            dividend: '0.93',
            'yield': '1.02',
            last_trade_time: '2021-07-20T09:20:46.000Z',
            difference: 'UP'
        });
        expect(newState.actualQuotes[2]).toStrictEqual({
            ticker: 'MSFT',
            exchange: 'NASDAQ',
            price: '263.92',
            change: '14.78',
            change_percent: '0.88',
            dividend: '0.56',
            'yield': '0.98',
            last_trade_time: '2021-07-20T09:20:46.000Z',
            difference: 'UP'
        });
        expect(newState.actualQuotes[3]).toStrictEqual({
            ticker: 'AMZN',
            exchange: 'NASDAQ',
            price: '110.03',
            change: '115.70',
            change_percent: '0.49',
            dividend: '0.44',
            'yield': '0.91',
            last_trade_time: '2021-07-20T09:20:46.000Z',
            difference: 'DOWN'
        });
    });

    it("new quotes should have expected difference from previous", () => {
        let testState = {
            prevQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '285.94',
                    change: '193.32',
                    change_percent: '0.33',
                    dividend: '0.33',
                    'yield': '0.28',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '139.40',
                    change: '171.08',
                    change_percent: '0.37',
                    dividend: '0.64',
                    'yield': '0.77',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '109.41',
                    change: '84.54',
                    change_percent: '0.12',
                    dividend: '0.59',
                    'yield': '1.85',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '203.58',
                    change: '144.53',
                    change_percent: '0.19',
                    dividend: '0.12',
                    'yield': '1.10',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '263.30',
                    change: '61.73',
                    change_percent: '0.79',
                    dividend: '0.67',
                    'yield': '0.71',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '186.52',
                    change: '24.20',
                    change_percent: '0.47',
                    dividend: '0.65',
                    'yield': '0.83',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                }
            ],
            actualQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '123.71',
                    change: '159.38',
                    change_percent: '0.52',
                    dividend: '0.77',
                    'yield': '1.04',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '227.55',
                    change: '74.97',
                    change_percent: '0.93',
                    dividend: '0.08',
                    'yield': '0.12',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '120.50',
                    change: '158.18',
                    change_percent: '0.45',
                    dividend: '0.05',
                    'yield': '1.59',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '152.94',
                    change: '35.87',
                    change_percent: '0.70',
                    dividend: '0.40',
                    'yield': '0.58',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '229.37',
                    change: '101.42',
                    change_percent: '0.36',
                    dividend: '0.72',
                    'yield': '1.53',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '178.69',
                    change: '0.12',
                    change_percent: '0.71',
                    dividend: '0.99',
                    'yield': '1.52',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                }
            ],
            stopedQuotes: []
        };
        let testPayload = [
            {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '268.09',
                change: '116.59',
                change_percent: '0.74',
                dividend: '0.21',
                'yield': '1.38',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'GOOGL',
                exchange: 'NASDAQ',
                price: '288.50',
                change: '41.66',
                change_percent: '0.53',
                dividend: '0.93',
                'yield': '1.02',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'MSFT',
                exchange: 'NASDAQ',
                price: '263.92',
                change: '14.78',
                change_percent: '0.88',
                dividend: '0.56',
                'yield': '0.98',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'AMZN',
                exchange: 'NASDAQ',
                price: '110.03',
                change: '115.70',
                change_percent: '0.49',
                dividend: '0.44',
                'yield': '0.91',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'FB',
                exchange: 'NASDAQ',
                price: '127.83',
                change: '72.22',
                change_percent: '0.45',
                dividend: '0.51',
                'yield': '1.69',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'TSLA',
                exchange: 'NASDAQ',
                price: '156.16',
                change: '79.34',
                change_percent: '0.66',
                dividend: '0.40',
                'yield': '1.38',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            }
        ];
        let newState = mainReducer(testState, setNewQuotes(testPayload));

        expect(newState.actualQuotes[0].difference).toBe("UP");
        expect(newState.actualQuotes[1].difference).toBe("UP");
        expect(newState.actualQuotes[2].difference).toBe("UP");
    });

    it("prev quotes should be moved to prevQuotes", () => {
        let testState = {
            prevQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '285.94',
                    change: '193.32',
                    change_percent: '0.33',
                    dividend: '0.33',
                    'yield': '0.28',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '139.40',
                    change: '171.08',
                    change_percent: '0.37',
                    dividend: '0.64',
                    'yield': '0.77',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '109.41',
                    change: '84.54',
                    change_percent: '0.12',
                    dividend: '0.59',
                    'yield': '1.85',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '203.58',
                    change: '144.53',
                    change_percent: '0.19',
                    dividend: '0.12',
                    'yield': '1.10',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '263.30',
                    change: '61.73',
                    change_percent: '0.79',
                    dividend: '0.67',
                    'yield': '0.71',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '186.52',
                    change: '24.20',
                    change_percent: '0.47',
                    dividend: '0.65',
                    'yield': '0.83',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                }
            ],
            actualQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '123.71',
                    change: '159.38',
                    change_percent: '0.52',
                    dividend: '0.77',
                    'yield': '1.04',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '227.55',
                    change: '74.97',
                    change_percent: '0.93',
                    dividend: '0.08',
                    'yield': '0.12',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '120.50',
                    change: '158.18',
                    change_percent: '0.45',
                    dividend: '0.05',
                    'yield': '1.59',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '152.94',
                    change: '35.87',
                    change_percent: '0.70',
                    dividend: '0.40',
                    'yield': '0.58',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '229.37',
                    change: '101.42',
                    change_percent: '0.36',
                    dividend: '0.72',
                    'yield': '1.53',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '178.69',
                    change: '0.12',
                    change_percent: '0.71',
                    dividend: '0.99',
                    'yield': '1.52',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                }
            ],
            stopedQuotes: []
        };
        let testPayload = [
            {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '268.09',
                change: '116.59',
                change_percent: '0.74',
                dividend: '0.21',
                'yield': '1.38',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'GOOGL',
                exchange: 'NASDAQ',
                price: '288.50',
                change: '41.66',
                change_percent: '0.53',
                dividend: '0.93',
                'yield': '1.02',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'MSFT',
                exchange: 'NASDAQ',
                price: '263.92',
                change: '14.78',
                change_percent: '0.88',
                dividend: '0.56',
                'yield': '0.98',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'AMZN',
                exchange: 'NASDAQ',
                price: '110.03',
                change: '115.70',
                change_percent: '0.49',
                dividend: '0.44',
                'yield': '0.91',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'FB',
                exchange: 'NASDAQ',
                price: '127.83',
                change: '72.22',
                change_percent: '0.45',
                dividend: '0.51',
                'yield': '1.69',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'TSLA',
                exchange: 'NASDAQ',
                price: '156.16',
                change: '79.34',
                change_percent: '0.66',
                dividend: '0.40',
                'yield': '1.38',
                last_trade_time: '2021-07-20T09:20:46.000Z',
                difference: 'UP'
            }
        ];
        let newState = mainReducer(testState, setNewQuotes(testPayload));

        expect(newState.prevQuotes).toStrictEqual(testState.actualQuotes);
    });
});


describe('test getStopQuotes  action creator', () => {

    it("selected qoutes must be added to stopedQuotes", () => {
        let testState = {
            prevQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '285.94',
                    change: '193.32',
                    change_percent: '0.33',
                    dividend: '0.33',
                    'yield': '0.28',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '139.40',
                    change: '171.08',
                    change_percent: '0.37',
                    dividend: '0.64',
                    'yield': '0.77',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '109.41',
                    change: '84.54',
                    change_percent: '0.12',
                    dividend: '0.59',
                    'yield': '1.85',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '203.58',
                    change: '144.53',
                    change_percent: '0.19',
                    dividend: '0.12',
                    'yield': '1.10',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '263.30',
                    change: '61.73',
                    change_percent: '0.79',
                    dividend: '0.67',
                    'yield': '0.71',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '186.52',
                    change: '24.20',
                    change_percent: '0.47',
                    dividend: '0.65',
                    'yield': '0.83',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                }
            ],
            actualQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '123.71',
                    change: '159.38',
                    change_percent: '0.52',
                    dividend: '0.77',
                    'yield': '1.04',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '227.55',
                    change: '74.97',
                    change_percent: '0.93',
                    dividend: '0.08',
                    'yield': '0.12',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '120.50',
                    change: '158.18',
                    change_percent: '0.45',
                    dividend: '0.05',
                    'yield': '1.59',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '152.94',
                    change: '35.87',
                    change_percent: '0.70',
                    dividend: '0.40',
                    'yield': '0.58',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '229.37',
                    change: '101.42',
                    change_percent: '0.36',
                    dividend: '0.72',
                    'yield': '1.53',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '178.69',
                    change: '0.12',
                    change_percent: '0.71',
                    dividend: '0.99',
                    'yield': '1.52',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                }
            ],
            stopedQuotes: []
        };
        let testPayload = {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '123.71',
            change: '159.38',
            change_percent: '0.52',
            dividend: '0.77',
            'yield': '1.04',
            last_trade_time: '2021-07-20T09:22:46.000Z',
            difference: 'DOWN',
            isStoped: true
        };
        let newState = mainReducer(testState, getStopQuotes(testPayload));

        expect(newState.stopedQuotes.length).toBe(1);
        expect(newState.stopedQuotes[0]).toStrictEqual(testPayload);
    });

    it("selected qoutes must being in actualQuotes", () => {
        let testState = {
            prevQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '285.94',
                    change: '193.32',
                    change_percent: '0.33',
                    dividend: '0.33',
                    'yield': '0.28',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '139.40',
                    change: '171.08',
                    change_percent: '0.37',
                    dividend: '0.64',
                    'yield': '0.77',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '109.41',
                    change: '84.54',
                    change_percent: '0.12',
                    dividend: '0.59',
                    'yield': '1.85',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '203.58',
                    change: '144.53',
                    change_percent: '0.19',
                    dividend: '0.12',
                    'yield': '1.10',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '263.30',
                    change: '61.73',
                    change_percent: '0.79',
                    dividend: '0.67',
                    'yield': '0.71',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '186.52',
                    change: '24.20',
                    change_percent: '0.47',
                    dividend: '0.65',
                    'yield': '0.83',
                    last_trade_time: '2021-07-20T09:22:41.000Z',
                    difference: 'UP'
                }
            ],
            actualQuotes: [
                {
                    ticker: 'AAPL',
                    exchange: 'NASDAQ',
                    price: '123.71',
                    change: '159.38',
                    change_percent: '0.52',
                    dividend: '0.77',
                    'yield': '1.04',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'GOOGL',
                    exchange: 'NASDAQ',
                    price: '227.55',
                    change: '74.97',
                    change_percent: '0.93',
                    dividend: '0.08',
                    'yield': '0.12',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'MSFT',
                    exchange: 'NASDAQ',
                    price: '120.50',
                    change: '158.18',
                    change_percent: '0.45',
                    dividend: '0.05',
                    'yield': '1.59',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'UP'
                },
                {
                    ticker: 'AMZN',
                    exchange: 'NASDAQ',
                    price: '152.94',
                    change: '35.87',
                    change_percent: '0.70',
                    dividend: '0.40',
                    'yield': '0.58',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'FB',
                    exchange: 'NASDAQ',
                    price: '229.37',
                    change: '101.42',
                    change_percent: '0.36',
                    dividend: '0.72',
                    'yield': '1.53',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                },
                {
                    ticker: 'TSLA',
                    exchange: 'NASDAQ',
                    price: '178.69',
                    change: '0.12',
                    change_percent: '0.71',
                    dividend: '0.99',
                    'yield': '1.52',
                    last_trade_time: '2021-07-20T09:22:46.000Z',
                    difference: 'DOWN'
                }
            ],
            stopedQuotes: []
        };
        let testPayload = {
            ticker: 'AAPL',
            exchange: 'NASDAQ',
            price: '123.71',
            change: '159.38',
            change_percent: '0.52',
            dividend: '0.77',
            'yield': '1.04',
            last_trade_time: '2021-07-20T09:22:46.000Z',
            difference: 'DOWN',
            isStoped: true
        };
        let newState = mainReducer(testState, getStopQuotes(testPayload));
        expect(newState.actualQuotes[0].isStoped).toBeTruthy();
    });
});


it("test getUpdateQuotesselected: qoutes must be deleted from stopedQuotes", () => {
    let testState = {
        prevQuotes: [
            {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '285.94',
                change: '193.32',
                change_percent: '0.33',
                dividend: '0.33',
                'yield': '0.28',
                last_trade_time: '2021-07-20T09:22:41.000Z',
                difference: 'UP'
            },
            {
                ticker: 'GOOGL',
                exchange: 'NASDAQ',
                price: '139.40',
                change: '171.08',
                change_percent: '0.37',
                dividend: '0.64',
                'yield': '0.77',
                last_trade_time: '2021-07-20T09:22:41.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'MSFT',
                exchange: 'NASDAQ',
                price: '109.41',
                change: '84.54',
                change_percent: '0.12',
                dividend: '0.59',
                'yield': '1.85',
                last_trade_time: '2021-07-20T09:22:41.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'AMZN',
                exchange: 'NASDAQ',
                price: '203.58',
                change: '144.53',
                change_percent: '0.19',
                dividend: '0.12',
                'yield': '1.10',
                last_trade_time: '2021-07-20T09:22:41.000Z',
                difference: 'UP'
            },
            {
                ticker: 'FB',
                exchange: 'NASDAQ',
                price: '263.30',
                change: '61.73',
                change_percent: '0.79',
                dividend: '0.67',
                'yield': '0.71',
                last_trade_time: '2021-07-20T09:22:41.000Z',
                difference: 'UP'
            },
            {
                ticker: 'TSLA',
                exchange: 'NASDAQ',
                price: '186.52',
                change: '24.20',
                change_percent: '0.47',
                dividend: '0.65',
                'yield': '0.83',
                last_trade_time: '2021-07-20T09:22:41.000Z',
                difference: 'UP'
            }
        ],
        actualQuotes: [
            {
                ticker: 'AAPL',
                exchange: 'NASDAQ',
                price: '123.71',
                change: '159.38',
                change_percent: '0.52',
                dividend: '0.77',
                'yield': '1.04',
                last_trade_time: '2021-07-20T09:22:46.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'GOOGL',
                exchange: 'NASDAQ',
                price: '227.55',
                change: '74.97',
                change_percent: '0.93',
                dividend: '0.08',
                'yield': '0.12',
                last_trade_time: '2021-07-20T09:22:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'MSFT',
                exchange: 'NASDAQ',
                price: '120.50',
                change: '158.18',
                change_percent: '0.45',
                dividend: '0.05',
                'yield': '1.59',
                last_trade_time: '2021-07-20T09:22:46.000Z',
                difference: 'UP'
            },
            {
                ticker: 'AMZN',
                exchange: 'NASDAQ',
                price: '152.94',
                change: '35.87',
                change_percent: '0.70',
                dividend: '0.40',
                'yield': '0.58',
                last_trade_time: '2021-07-20T09:22:46.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'FB',
                exchange: 'NASDAQ',
                price: '229.37',
                change: '101.42',
                change_percent: '0.36',
                dividend: '0.72',
                'yield': '1.53',
                last_trade_time: '2021-07-20T09:22:46.000Z',
                difference: 'DOWN'
            },
            {
                ticker: 'TSLA',
                exchange: 'NASDAQ',
                price: '178.69',
                change: '0.12',
                change_percent: '0.71',
                dividend: '0.99',
                'yield': '1.52',
                last_trade_time: '2021-07-20T09:22:46.000Z',
                difference: 'DOWN'
            }
        ],
        stopedQuotes: []
    };
    let testPayload = {
        ticker: 'AAPL',
        exchange: 'NASDAQ',
        price: '123.71',
        change: '159.38',
        change_percent: '0.52',
        dividend: '0.77',
        'yield': '1.04',
        last_trade_time: '2021-07-20T09:22:46.000Z',
        difference: 'DOWN',
        isStoped: true
    };
    let newState = mainReducer(testState, getUpdateQuotes(testPayload));
    expect(newState.stopedQuotes).not.toContain(testPayload);
});




