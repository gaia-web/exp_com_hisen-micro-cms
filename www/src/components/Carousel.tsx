import "@gaia/garage";
import slides from "../assets/slides.json";
import { langHelper } from "../utils/language";

function Carousel() {
  return (
    <gaia-carousel prop:timeout={5} style="height: 600px">
      {slides.map((slide) => (
        <div
          class="bg-cover grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_auto_auto_1fr]"
          style={`background-image: url(${slide.image})`}
        >
          <div
            class="col-start-2 row-start-2 text-[3em]"
            style="text-shadow: 0.25em 0.25em 0.25em hsl(0, 0%, 0%, 0.5);"
          >
            {langHelper(slide.title)}
          </div>
          <div
            class="col-start-2 row-start-3 text-[1.5em]"
            style="text-shadow: 0.25em 0.25em 0.25em hsl(0, 0%, 0%, 0.5);"
          >
            {langHelper(slide.subtitle)}
          </div>
        </div>
      ))}
    </gaia-carousel>
  );
}

export default Carousel;
