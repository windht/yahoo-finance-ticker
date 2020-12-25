import { YahooFinanceTicker } from "./index";

const stream = new YahooFinanceTicker();

stream.subscribe(["BTC-USD"], (ticker) => {
  console.log(ticker);
});
