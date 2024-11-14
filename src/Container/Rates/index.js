import { useState } from "react";

const Rates = ({ curriencies, toggleScreen, getRateTable, saveRate }) => {

  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const [showRate, setShowRate] = useState(true);

  const onClick = (event) => {
    event.preventDefault();
    if (showRate) {
      setRate(getRateTable(currency));
    } else {
      setShowRate(true);
      saveRate(currency, rate);
    }
  };

  return (
    <form className="form" onSubmit={onClick}>
      <p>
        <input
          value={rate}
          onChange={({ target }) => {
            setShowRate(false);
            setRate(target.value)
          }}
          type="number"
          step="0.01"
          min="0.01"
          placeholder="Aktualny kurs"
          autoFocus
        />
        <select
          value={currency}
          onChange={({ target }) => {
            setShowRate(true);
            setRate("");
            setCurrency(target.value)
          }}
        >
          {curriencies}
        </select>
      </p>
      <p>
        <button
          className="form__button"
          disabled={currency === "" || currency === "---" || currency === "PLN"}
        >
          {showRate
            ? "Pokaż kurs"
            : "Zapisz kurs"}
        </button>
      </p>
      <p>
        <strong
          className="form__label form__labelRates"
          onClick={toggleScreen}
        >
          Powrót do kalkulacji
        </strong>
      </p>
    </form>
  )
};

export default Rates;