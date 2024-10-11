import "./style.css";

const Form = () => (
  <form className="form">
    <p>
      <label className="form__label"> Podaj kwotę wybranej waluty:
        <input type="number" step="0.01" min="0.01" required
          placeholder="Twoja wartość" autoFocus />
        <select ></select>
        <strong className="form__label form__labelEqual"> = </strong>
        <input type="number" readOnly placeholder="Obliczona wartość" />
        <select ></select>
      </label>
    </p>
    <p>
      <strong className="form__label form__labelRates">
        Pokaż kursy walut
      </strong>
      <strong className="form__label form__labelRates" hidden>
        Ukryj kursy walut:
      </strong>
      <input type="number" step="0.0001" min="0.0001" required hidden
        placeholder="Podaj kurs" />
      <select hidden></select>
    </p>
  </form>
);

export default Form;