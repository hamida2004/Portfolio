import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { HashRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Testemonials from "./pages/Testemonials";
import CaseStudy from "./pages/CaseStudy";
import bubblesCs from "./assets/images/bubblesCs.png";
import MusalahCs from "./assets/images/MusalahCs.png";
import medhub from "./assets/images/medhub.png";
import hamsa from "./assets/images/hamsa1.png";
import eco from "./assets/images/EcoSecure.PNG";
import trabek from "./assets/images/trabek.png";
import Footer from "./components/Footer";
function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/testimonials" element={<Testemonials />} />
        <Route
          path="/studycase/bubbles"
          element={<CaseStudy image={bubblesCs} id={4} />}
        />
        <Route
          path="/studycase/musalah"
          element={<CaseStudy image={MusalahCs} id={6} />}
        />
        <Route
          path="/studycase/medhub"
          element={<CaseStudy image={medhub} id={7} />}
        /><Route
          path="/studycase/hamsa"
          element={<CaseStudy image={hamsa} id={9} />}
        /><Route
          path="/studycase/smart-infra"
          element={<CaseStudy image={eco} id={8} />}
        /><Route
          path="/studycase/trabek"
          element={<CaseStudy image={trabek} id={10} />}
        />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
