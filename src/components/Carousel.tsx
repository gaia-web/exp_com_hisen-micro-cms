import "@gaia/garage";
import slides from "../assets/slides.json";
import { langHelper } from "../utils/language";

function Carousel() {
  return (
    <gaia-carousel prop:timeout={5} style="height: 600px">
      {slides.map((slide) => (
        <div
          style={`background-image: url(${slide.image}); background-size: cover; display: grid; grid-template-rows: 1fr auto auto 1fr; grid-template-columns: 1fr auto 1fr;`}
        >
          <div style="grid-row: 2; grid-column: 2; font-size: 3em; text-shadow: 0.25em 0.25em 0.25em hsl(0, 0%, 0%, 0.5);">
            {langHelper(slide.title.en, slide.title.cn)}
          </div>
          <div style="grid-row: 3; grid-column: 2;font-size: 1.5em; text-shadow: 0.25em 0.25em 0.25em hsl(0, 0%, 0%, 0.5);">
            {langHelper(slide.subtitle.en, slide.subtitle.cn)}
          </div>
        </div>
      ))}
    </gaia-carousel>
  );
}

export default Carousel;
