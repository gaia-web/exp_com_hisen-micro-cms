import "@gaia/garage";
import Header from "../components/Header";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import { LanguageObject, langHelper } from "../utils/language";
import highlights from "../assets/highlights.json";
import programs from "../assets/programs.json";
import { useNavigate } from "@solidjs/router";
import { startViewTransition } from "../utils/startViewTransition";

function Home() {
  return (
    <>
      <Header />
      <Carousel />
      <HighlightsSection />
      <ProgramsSection />
      <Footer />
    </>
  );
}

export default Home;

const HighlightsSection = () => (
  <div class="relative max-w-[1280px] mx-auto my-10 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
    <div class="flex flex-col gap-y-3 p-3">
      <div class="flex-auto">
        <span class="hue-rotating rounded-[5px] bg-blue-50 text-blue-400 p-2 text-sm">
          {langHelper(highlights.badge)}
        </span>
      </div>
      <div class="text-bold text-5xl">{langHelper(highlights.title)}</div>
      <div class="text-gray-500">{langHelper(highlights.subtitle)}</div>
      {highlights.highlights.map((highlight) => (
        <div class="grid grid-rows-[auto_auto] grid-cols-[auto_1fr] gap-3">
          <div
            class="hue-rotating col-start-1 row-start-1 rounded-full"
            style={`background-color: ${highlight.baseColor}`}
          >
            <img src={highlight.icon} />
          </div>
          <div class="col-start-2 row-start-1">
            {langHelper(highlight.title)}
          </div>
          <div class="col-start-2 row-start-2 text-gray-500">
            {langHelper(highlight.content)}
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

const ProgramsSection = () => (
  <div class="max-w-[1280px] mx-auto my-10">
    <div class="text-bold text-6xl text-center">
      <span>{langHelper(programs.title.part1)}</span>
      <span class="hue-rotating text-orange-400">
        {langHelper(programs.title.part2)}
      </span>
    </div>
    <div class="text-gray-500 text-center my-5">
      {langHelper(programs.subtitle)}
    </div>
    {programs.programs.map((program) => (
      <ProgramCard program={program} />
    ))}
  </div>
);

type Program = {
  title: LanguageObject;
  content: LanguageObject;
  applicationCycle: LanguageObject;
  image: string;
  href: string;
};

const ProgramCard = ({ program }: { program: Program }) => {
  const navigate = useNavigate();
  return (
    <gaia-card class="my-5">
      <div class="-my-[10px] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-5">
        <img
          class="object-cover w-full h-full rounded-[10px]"
          src={program.image}
        />
        <div class="grid grid-rows-[1fr_auto_auto_auto_auto_1fr] gap-y-2">
          <div class="row-start-2 text-2xl text-bold text-center">
            {langHelper(program.title)}
          </div>
          <div class="row-start-3">{langHelper(program.content)}</div>
          <div class="row-start-4 text-gray-500 ">
            <span>{langHelper("Application Cycle: ", "办理周期：")}</span>
            <span>{langHelper(program.applicationCycle)}</span>
          </div>
          <button
            class="hue-rotating row-start-5 bg-blue-500 w-fit m-auto"
            onclick={() => startViewTransition(() => navigate(program.href))}
          >
            {langHelper("Explore subcategories", "探索子类别")}
          </button>
        </div>
      </div>
    </gaia-card>
  );
};
