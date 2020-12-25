# Yahoo Finance Ticker

This is a nodejs implementation of yahoo finance live ticker inspired by python package [yliveticker](https://github.com/yahoofinancelive/yliveticker/tree/master/yliveticker).

## Install

```
npm install yahoo-finance-ticker
```

or

```
yarn add yahoo-finance-ticker
```

## Usage

```
import YahooFinanceTicker from "yahoo-finance-ticker";

const ticker = new YahooFinanceTicker();

// Pass in a callback
ticker.subscribe(["BTC-USD"], (ticker) => {
  console.log(ticker);
});

// Use async/await
(async () => {
    const tickerListener = await ticker.subscribe(["BTC-USD"])
    tickerListener.on("ticker", (ticker) => {
        console.log(ticker);
    })
})().catch(err => console.err(err))

```
