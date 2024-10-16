import "./style.css";

const Form = ({ curriencies, body }) => (
  <>
    <form className="form">
      <p className="form__label">
        Podaj kwotę wybranej waluty:
        <input type="number" step="0.01" min="0.01" required
          placeholder="Twoja wartość" autoFocus />
        {curriencies}
        <strong className="form__label form__labelEqual"> = </strong>
        <input type="number" readOnly placeholder="Obliczona wartość" />
        {curriencies}
      </p>
      {body}
    </form>
  </>
);

export default Form;