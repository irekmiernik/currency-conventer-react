import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Calculator from "./Calculator";
import Curriencies from "./Curriencies";
import Rates from "./Rates";

const initialRatesTable = [
  { id: 0, curriency: "---", rate: 0.00 },
  { id: 1, curriency: "PLN", rate: 1.00 },
  { id: 2, curriency: "EUR", rate: 4.56 },
  { id: 3, curriency: "USD", rate: 3.95 },
  { id: 4, curriency: "GBP", rate: 5.30 },
  { id: 5, curriency: "CHF", rate: 4.88 },
];

export default function App() {

  const [ratesTable, setRatesTable] = useState(initialRatesTable);
  const [screen, setScreen] = useState(false);

  const toggleScreen = () => setScreen(screen => !screen);

  const index = (curriency) => {
    for (let i = 0; i < ratesTable.length; i++) {
      if (ratesTable[i].curriency === curriency) return i;
    }
  };

  const getRateTable = (curriency) => ratesTable[index(curriency)].rate;

  const saveRate = (curriency, newRate) => {
    setRatesTable(ratesTable => ratesTable.map((oneRate) => {
      if (oneRate.curriency === curriency) return { ...oneRate, rate: newRate }; else return oneRate;
    }))
  };

  return (
    <>
      <Header title="Kalkulator walutowy" />
      <Container>
        {screen
          ? <Rates curriencies={<Curriencies ratesTable={ratesTable} />} toggleScreen={toggleScreen}
            getRateTable={getRateTable} saveRate={saveRate} />

          : <Calculator curriencies={<Curriencies ratesTable={ratesTable} />} toggleScreen={toggleScreen}
            getRateTable={getRateTable} />
        }
      </Container>
      <Footer date="2024" />
    </>
  );
}