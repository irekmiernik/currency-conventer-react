
const Curriencies = ({ rateSet }) => (
  <>
    {rateSet.ratesTable.map(rate => (
      <option key={rate.id}>
        {rate.curriency}
      </option>
    ))}
  </>
);

export default Curriencies;