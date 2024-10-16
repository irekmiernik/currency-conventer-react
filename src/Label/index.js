import "./style.css";

const Label = ({ toggleShowRates }) => (
  <p>
    Kursy walut można zobaczyć <strong className="form__label form__labelRates"
      onClick={toggleShowRates}>tutaj</strong>
  </p>);

export default Label;

