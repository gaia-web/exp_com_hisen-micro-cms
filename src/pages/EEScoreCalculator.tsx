import EEScoreCalculatorHTML from "../assets/ee-score-calculator.html?url";

function EEScoreCalculator() {
  return (
    <>
      <iframe
        src={EEScoreCalculatorHTML}
        title="EEMark Embedded Page"
        style="overflow: hidden; height: 0; width: 100%; border: none; overflow: hidden; transition: height 3s ease-in-out;"
        onload={({ currentTarget }) => {
          currentTarget.contentWindow?.addEventListener("message", (e) => {
            currentTarget.style.height = `${e.data}px`;
          });
        }}
      />
    </>
  );
}

export default EEScoreCalculator;
