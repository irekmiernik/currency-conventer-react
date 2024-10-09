
export default function App() {
  return (
    <>
      <h1 className="header">Kalkulator walutowy</h1>
      <div className="container">
        <form className="form">
          <p>
            <label className="form__label"> Podaj kwotę wybranej waluty:
              <input className="js-inputAmount" type="number" step="0.01" min="0.01" required
                placeholder="Twoja wartość" autoFocus />
              <select className="js-inputCurrency"></select>
              <strong className="form__label form__labelEqual"> = </strong>
              <input className="js-outputAmount" type="number" readOnly placeholder="Obliczona wartość" />
              <select className="js-outputCurrency"></select>
            </label>
          </p>
          <p>
            <strong className="form__label form__labelRates js-labelUpdateExchangeRates">
              Pokaż kursy walut
            </strong>
            <strong className="form__label form__labelRates js-labelInputExchangeRates" hidden>
              Ukryj kursy walut:
            </strong>
            <input className="js-inputExchangeRate" type="number" step="0.0001" min="0.0001" required hidden
              placeholder="Podaj kurs" />
            <select className="js-inputExchangeRateCurrency" hidden></select>
          </p>
        </form>
      </div>
      <footer className="footer">Wszelkie prawa zastrzeżone Ireneusz Miernik 2023</footer>
    </>
  );
}
