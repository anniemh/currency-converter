import { useState, useMemo } from "react";

const exchangeRates = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.78,
  JPY: 156.7,
};

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const convertedAmounts = useMemo(() => {
    const amountInUSD = amount / exchangeRates[fromCurrency];

    return {
      USD: amountInUSD * exchangeRates.USD,
      EUR: amountInUSD * exchangeRates.EUR,
      GBP: amountInUSD * exchangeRates.GBP,
      JPY: amountInUSD * exchangeRates.JPY,
    };
  }, [amount, fromCurrency]);

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <form className="converter-form">
        <div className="form-group">
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
        </div>

        <div className="currency-row">
          <div className="form-group">
            <label htmlFor="from-currency">Start Currency:</label>

            <select
              id="from-currency"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="to-currency">Target Currency:</label>

            <select
              id="to-currency"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              {Object.keys(exchangeRates).map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>

      <div className="result">
        <p>
          {convertedAmounts[toCurrency].toFixed(2)}
          {""}
          {toCurrency}
        </p>
      </div>
    </div>
  );
}

export default App;
