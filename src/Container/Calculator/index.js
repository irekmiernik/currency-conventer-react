import { useState } from "react";
import Curriencies from "../../Curriencies";

const Calculator = ({ toggleScreen, objectRates }) => {

  const [inValue, setInValue] = useState("");
  const [outValue, setOutValue] = useState("");
  const [inCurrency, setInCurrency] = useState("");
  const [outCurrency, setOutCurrency] = useState("");

  const calculateValue = (inValue, rateIn, rateOut) =>
    (rateIn > 0 & rateOut > 0 & +inValue > 0) ? ((rateIn / rateOut) * +inValue).toFixed(2) : "";

  const onOblicz = (event) => {
    event.preventDefault();
    let a = calculateValue(inValue, objectRates.getRate(inCurrency), objectRates.getRate(outCurrency));
    setOutValue(a);
  };

  return (
    <>
      <form className="form" onSubmit={onOblicz}>
        <p className="form__label">
          <input
            value={inValue}
            onChange={({ target }) => setInValue(target.value)}
            type="number" step="0.01" min="0.01"
            placeholder="Twoja wartość"
            autoFocus
          />
          <select
            value={inCurrency}
            onChange={({ target }) => {
              setOutValue("");
              setInCurrency(target.value)
            }}
          >
            <Curriencies objectRates={objectRates} />
          </select>
          <strong className="form__label form__labelEqual"> = </strong>
          <input
            value={outValue}
            type="number"
            readOnly={true}
            placeholder="Obliczona wartość"
          />
          <select
            value={outCurrency}
            onChange={({ target }) => {
              setOutValue("");
              setOutCurrency(target.value)
            }}
          >
            <Curriencies objectRates={objectRates} />
          </select>
        </p>
        <p>
          <button
            className="form__button"
            disabled={inCurrency === "" || outCurrency === ""
              || inCurrency === "---" || outCurrency === "---"}
          >
            Przelicz
          </button>
        </p>
        <p>
          <strong
            className="form__label form__labelRates"
            onClick={toggleScreen}
          >
            Aktualizacja kursów walut
          </strong>
        </p>

      </form >
    </>
  )
};

export default Calculator;