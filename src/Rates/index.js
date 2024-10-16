const Rates = ({ curriencies, toggleShowRates }) => (
  <p>
    <strong className="form__label form__labelRates" onClick={toggleShowRates}>
      Ukryj kursy walut:
    </strong>
    <input type="number" step="0.0001" min="0.0001"
      placeholder="Podaj kurs" />
    {curriencies}
  </p>
);

export default Rates;