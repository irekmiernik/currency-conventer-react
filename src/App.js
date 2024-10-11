import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";
import Form from "./Form";

export default function App() {
  return (
    <>
      <Header title="Kalkulator walutowy" />
      <Container body={<Form />} />
      <Footer date="2024" />
    </>
  );
}