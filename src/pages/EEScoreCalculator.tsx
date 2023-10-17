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
        onload={({ currentTarget }) => {
          currentTarget.contentWindow?.addEventListener("message", (e) => {
            currentTarget.style.height = `${e.data}px`;
          });
        }}
      />
      <Footer />
    </>
  );
}

export default EEScoreCalculator;
