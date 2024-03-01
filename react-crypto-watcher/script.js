function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
var exchange = "Bitfinex";
var watchlist = [
  "BTC",
  "ETH",
  "XRP",
  "BCH",
  "EOS",
  "BTG",
  "LTC",
  "NEO",
  "DASH",
  "XMR",
  "ETC",
  "ZEC",
  "OMG",
];
var socket;

const { AreaChart, Area, ResponsiveContainer } = window.Recharts;
const Watcher = ({ price, symbol, change, popupDelay, chartData }) =>
  React.createElement(
    "a",
    {
      className: `App__dashboard-watcher ${change > 0 ? "gain" : "lost"}`,
      style: {
        animationDelay: popupDelay + "s",
      },

      target: "_blank",
      href: `https://www.cryptocompare.com/coins/${symbol.toLowerCase()}/overview/${symbol}`,
    },
    React.createElement(
      "div",
      { className: "chart" },
      React.createElement(
        ResponsiveContainer,
        { width: "100%", height: "100%" },
        React.createElement(
          AreaChart,
          {
            data: chartData,
          },
          React.createElement(Area, {
            type: "monotone",
            dataKey: "close",
            stroke: change > 0 ? "#63b556" : "#ff6939",
            fill: change > 0 ? "#63b556" : "#ff6939",
          })
        )
      )
    ),
    React.createElement("h2", null, symbol),
    React.createElement("h1", null, "$", price),
    React.createElement("span", { className: "indicator" }),
    React.createElement("span", { className: "change" }, change, "%")
  );

class App extends React.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      watcher: watchlist,
      data: {},
      chartData: {},
      socket: "Off",
    });
  }

  componentDidMount() {
    socket = io.connect("https://streamer.cryptocompare.com/");
    const subs = this.state.watcher.map(
      (symbol) => `2~${exchange}~${symbol}~USD`
    );
    socket.emit("SubAdd", { subs });
    socket.on("m", this.newChange.bind(this));
    socket.on("connect", () => this.setState({ socket: "On" }));
    socket.on("disconnect", () => this.setState({ socket: "Off" }));

    this.state.watcher.forEach((symbol) => this.loadChart(symbol));
    setInterval(
      () => this.state.watcher.forEach((symbol) => this.loadChart(symbol)),
      30000
    );
  }

  loadChart(symbol) {
    fetch(
      `https://min-api.cryptocompare.com/data/histoday?fsym=${symbol}&tsym=USD&limit=60&aggregate=3&e=CCCAGG`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          chartData: Object.assign({}, this.state.chartData, {
            [symbol]: data.Data,
          }),
        });
      });
  }

  newChange(message) {
    const data = message.split("~");

    if (data[4] === "1" || data[4] === "2" || data[4] === "4") {
      var fsym = data[2];
      var detail;
      if (typeof this.state.data[fsym] === "undefined") {
        //first time
        detail = {
          price: data[5],
          volume24: data[10],
          open24: data[12],
        };

        detail.pctChange = (
          ((detail.price - detail.open24) / detail.open24) *
          100
        ).toFixed(2);
      } else if (data[4] === "1" || data[4] === "2") {
        detail = Object.assign({}, this.state.data[fsym], {
          price: data[5],
          volume24: data[10],
        });

        detail.pctChange = (
          ((detail.price - detail.open24) / detail.open24) *
          100
        ).toFixed(2);
      }

      this.setState({
        data: Object.assign({}, this.state.data, {
          [fsym]: Object.assign({}, this.state.data[fsym], detail),
        }),
      });
    }
  }

  render() {
    return /*#__PURE__*/ React.createElement(
      "div",
      { className: "App" },
      /*#__PURE__*/ React.createElement(
        "div",
        { className: "App__dashboard" },
        this.state.watcher.map((symbol, i) =>
          /*#__PURE__*/ React.createElement(Watcher, {
            key: symbol,
            symbol: symbol,
            price: this.state.data[symbol]
              ? this.state.data[symbol].price
              : "...",
            change: this.state.data[symbol]
              ? this.state.data[symbol].pctChange
              : "..",
            popupDelay: 0.55 + i * 0.2,
            chartData: this.state.chartData[symbol],
          })
        )
      ),
      /*#__PURE__*/ React.createElement(
        "span",
        null,
        "Current Exchange: ",
        exchange
      ),
      /*#__PURE__*/ React.createElement(
        "span",
        null,
        "Data stream:",
        /*#__PURE__*/
        React.createElement(
          "span",
          {
            style: {
              color: this.state.socket === "On" > 0 ? "#ff6939" : "#63b556",
            },
          },
          this.state.socket
        )
      ),
      /*#__PURE__*/ React.createElement(
        "span",
        null,
        "Data source: ",
        /*#__PURE__*/ React.createElement(
          "a",
          { href: "https://www.cryptocompare.com", target: "_blank" },
          "CryptoCompare"
        )
      )
    );
  }
}

ReactDOM.render(
  /*#__PURE__*/ React.createElement(App, null),
  document.getElementById("i-am-a-react-app")
);
