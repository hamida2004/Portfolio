import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Testemonials from "./pages/Testemonials";
import CaseStudy from "./pages/CaseStudy";
import bubblesCs from "./assets/images/bubblesCs.png";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testemonials" element={<Testemonials />} />
        <Route
          path="/studycase/bubbles"
          element={<CaseStudy image={bubblesCs} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
