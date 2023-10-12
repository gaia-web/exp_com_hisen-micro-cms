import { createSignal } from "solid-js";
import { Router, Routes, Route } from "@solidjs/router";
import { LanguageContext } from "./utils/language";
import Home from "./pages/Home";
import "./App.css";
import Fallback from "./pages/Fallback";

function App() {
  const [isEnglish, setIsEnglish] = createSignal(true);

  return (
    <LanguageContext.Provider value={{ isEnglish, setIsEnglish }}>
      <Router>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/*" component={Fallback} />
        </Routes>
      </Router>
    </LanguageContext.Provider>
  );
}

export default App;
