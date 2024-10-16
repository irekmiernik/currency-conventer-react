const Curriencies = ({ tableRates }) => (
  <select>
    {tableRates.map(rate => (
      <option key={rate.id}>
        {rate.curriency}
      </option>
    ))}
  </select>
);

export default Curriencies;