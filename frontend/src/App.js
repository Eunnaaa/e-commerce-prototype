import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./components/Header";
import Timeline from "./components/Timeline";
import Widget from "./components/Widget";
import Product from "./components/Product";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>
          {/* Timeline Section */}
          <Timeline></Timeline>

          {/* Garis Pemisah */}
          <hr className="section-divider" />

          {/* Widget Section */}
          <Widget></Widget>

          {/* Garis Pemisah */}
          <hr className="section-divider" />

          {/* Card Section */}
          <Product></Product>

          {/* Garis Pemisah */}
          <hr className="section-divider" />

          {/* About Section */}
          <About></About>

          {/* Garis Pemisah */}
          <hr className="section-divider" />

          {/* Contact Section */}
          <Contact></Contact>

          {/* Garis Pemisah */}
          <hr className="section-divider" />
        </Container>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
