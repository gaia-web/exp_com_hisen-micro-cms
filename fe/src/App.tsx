import { createSignal } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import { LanguageContext } from "./utils/language";
import Home from "./pages/Home";
import Fallback from "./pages/Fallback";
import Markdown from "./pages/Entrance";
import EEScoreCalculator from "./pages/EEScoreCalculator";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [isEnglish, setIsEnglish] = createSignal(true);

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/entrances/*id" component={Markdown} />
          <Route path="/ee-score-calculator" component={EEScoreCalculator} />
          <Route path="/*" component={Fallback} />
        </Routes>
        <Footer />
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
