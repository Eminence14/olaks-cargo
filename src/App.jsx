import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Welcome from "./components/Welcome/Welcome";
import Services from "./components/Services/Services";
import Gallery from "./components/Gallery/Gallery";
import Form from "./components/Form/Form";
import LookingFor from "./components/LookingFor/LookingFor";
import Facts from "./components/Facts/Facts";
import Clients from "./components/Clients/Clients";
import Ready from "./components/ReadyPackage/Ready";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Welcome />
      <Services />
      <Gallery />
      <div className="flex quote-section">
        <LookingFor />
        <Form />
      </div>
      <Facts />
      <Clients />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
