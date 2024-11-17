import { useState } from "react";
import { Header } from "./Container/Header";
import { Footer } from "./Container/Footer";
import { Container } from "./Container";
import { Calculator } from "./Container/Calculator";
import { Updater } from "./Container/Updater";
import { Dater } from "./Container/Dater";
import { useRates } from "./useRates";

const initialRatesTable = [
  { id: 0, curriency: "---", rate: 0.00 },
  { id: 1, curriency: "PLN", rate: 1.00 },
  { id: 2, curriency: "EUR", rate: 4.56 },
  { id: 3, curriency: "USD", rate: 3.95 },
  { id: 4, curriency: "GBP", rate: 5.30 },
  { id: 5, curriency: "CHF", rate: 4.88 },
];

export default function App() {

  const rateSet = useRates({ initialRatesTable });

  const [switcher, setSwitcher] = useState(true);
  const toggleSwitcher = () => setSwitcher(switcher => !switcher);

  return (
    <Container>
      <Dater />
      <Header title="Kalkulator walutowy" />
      {switcher && <Calculator rateSet={rateSet} toggleSwitcher={toggleSwitcher} />}
      {!switcher && <Updater rateSet={rateSet} toggleSwitcher={toggleSwitcher} />}
      <Footer date="2024" />
    </Container>
  );
};

