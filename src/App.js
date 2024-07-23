import "./App.css";
import { Route, Routes } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Testimonials from "./Pages/Testimonials";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        {/*   <Route path="/contact" element={<Contact />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/shopifydevelopment" element={<Shopifydevelopment />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
