import { useState } from "react";

export const useRates = ({ initialRatesTable }) => {

  const [ratesTable, setRatesTable] = useState(initialRatesTable);


  const index = (curriency) => {
    for (let i = 0; i < ratesTable.length; i++) {
      if (ratesTable[i].curriency === curriency) return i;
    }
  };

  const getRate = (curriency) => ratesTable[index(curriency)].rate;

  const saveRate = (curriency, newRate) => {
    setRatesTable(ratesTable => ratesTable.map((oneRate) => {
      if (oneRate.curriency === curriency) return { ...oneRate, rate: newRate }; else return oneRate;
    }))
  };
  return {
    ratesTable,
    getRate,
    saveRate,
  };
};

