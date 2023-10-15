import Footer from "../components/Footer";
import Header from "../components/Header";
import EEScoreCalculatorHTML from "../assets/ee-score-calculator.html?url";

function EEScoreCalculator() {
  return (
    <>
      <Header />
      <iframe
        src={EEScoreCalculatorHTML}
        title="EEMark Embedded Page"
        style="overflow: hidden; width: 100%; border: none; overflow: hidden;"
        onload={({ currentTarget }) =>
          (currentTarget.style.height = `${currentTarget.contentDocument?.documentElement.scrollHeight}px`)
        }
      />
      <Footer />
    </>
  );
}

export default EEScoreCalculator;
