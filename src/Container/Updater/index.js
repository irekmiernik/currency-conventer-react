import { useState } from "react";
import Curriencies from "../../Curriencies";

export const Updater = ({ rateSet, toggleSwitcher }) => {

  const [currency, setCurrency] = useState("");
  const [rate, setRate] = useState("");
  const [showRate, setShowRate] = useState(true);

  const onClick = (event) => {
    event.preventDefault();
    if (showRate) {
      setRate(rateSet.getRate(currency));
    } else {
      setShowRate(true);
      rateSet.saveRate(currency, rate);
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
          <Curriencies rateSet={rateSet} />
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
          onClick={toggleSwitcher}
        >
          Powrót do kalkulacji
        </strong>
      </p>
    </form>
  )
};