import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Form from "./Form";
import Curriencies from "./Curriencies";
import Label from "./Label";
import Rates from "./Rates";

export default function App() {

  const tableRates = [
    { id: 0, curriency: "PLN", rate: 1.00 },
    { id: 1, curriency: "EUR", rate: 4.56 },
    { id: 2, curriency: "USD", rate: 3.95 },
    { id: 3, curriency: "GBP", rate: 5.30 },
    { id: 4, curriency: "CHF", rate: 4.88 },
  ];

  const [showRates, setShowRates] = useState(false);

  const toggleShowRates = () => setShowRates(showRates => !showRates);

  return (
    <>
      <Header title="Kalkulator walutowy" />
      {showRates
        ? <Container body={<Form curriencies={<Curriencies tableRates={tableRates} />}
          body={<Rates curriencies={< Curriencies tableRates={tableRates} />} toggleShowRates={toggleShowRates} />} />} />

        : <Container body={<Form curriencies={<Curriencies tableRates={tableRates} />}
          body={<Label toggleShowRates={toggleShowRates} />} />} />
      }
      <Footer date="2024" />
    </>
  );
}