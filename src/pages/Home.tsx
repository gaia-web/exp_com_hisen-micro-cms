import "@gaia/garage";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { langHelper } from "../utils/language";
import highlights from "../assets/highlights.json";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <HighlightsSection />
      <Footer />
    </>
  );
}

const HighlightsSection = () => (
  <div class="relative max-w-[1280px] mx-auto my-10 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
    <div class="flex flex-col gap-y-3 p-3">
      <div class="flex-auto">
        <span class="hue-rotating rounded-[5px] bg-blue-50 text-blue-400 p-2 text-sm">
          {langHelper(highlights.badge.en, highlights.badge.cn)}
        </span>
      </div>
      <div class="text-bold text-5xl">
        {langHelper(highlights.title.en, highlights.title.cn)}
      </div>
      <div class="text-gray-500">
        {langHelper(highlights.subtitle.en, highlights.subtitle.cn)}
      </div>
      {highlights.highlights.map((highlight) => (
        <div class="grid grid-rows-[auto_auto] grid-cols-[auto_1fr] gap-3">
          <div
            class="hue-rotating col-start-1 row-start-1 rounded-full"
            style={`background-color: ${highlight.baseColor}`}
          >
            <img src={highlight.icon} />
          </div>
          <div class="col-start-2 row-start-1">
            {langHelper(highlight.title.en, highlight.title.cn)}
          </div>
          <div class="col-start-2 row-start-2 text-gray-500">
            {langHelper(highlight.content.en, highlight.content.cn)}
          </div>
        </div>
      ))}
    </div>
    <div class="w-full h-full p-3">
      <img
        class="object-cover w-full h-full rounded-[10px]"
        src="https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
        alt=""
      />
    </div>
  </div>
);

export default Home;
