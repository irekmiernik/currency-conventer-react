const Curriencies = ({ objectRates }) => (
  <>
    {objectRates.ratesTable.map(rate => (
      <option key={rate.id}>
        {rate.curriency}
      </option>
    ))}
  </>
);

export default Curriencies;