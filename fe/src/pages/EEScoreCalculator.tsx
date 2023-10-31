import EEScoreCalculatorHTML from "../assets/ee-score-calculator.html?url";

function EEScoreCalculator() {
  return (
    <>
      <iframe
        src={EEScoreCalculatorHTML}
        title="EEMark Embedded Page"
        class="overflow-hidden h-0 w-full border-none transition-height duration-3s"
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
