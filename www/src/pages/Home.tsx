import "@gaia/garage";
import Carousel from "../components/Carousel";
import { LanguageObject, langHelper } from "../utils/language";
import { useNavigate } from "@solidjs/router";
import { startViewTransition } from "../utils/startViewTransition";

const programs = await fetch('/api/general/programs').then(response => response.json());
const highlights = await fetch('/api/general/highlights').then(response => response.json());
const testimonials = await fetch('/api/general/testimonials').then(response => response.json());

function Home() {
  return (
    <>
      <Carousel />
      <HighlightsSection />
      <ProgramsSection />
      <TestimonialsSection />
    </>
  );
}

export default Home;

const HighlightsSection = () => (
  <div class="relative max-w-[1280px] mx-auto my-10 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
    <div class="flex flex-col gap-y-3 p-3">
      <div class="flex-auto">
        <span class="hue-swing rounded-[5px] bg-blue-50 text-blue-400 p-2 text-sm">
          {langHelper(highlights.badge)}
        </span>
      </div>
      <div class="text-bold text-5xl">{langHelper(highlights.title)}</div>
      <div class="text-gray-500">{langHelper(highlights.subtitle)}</div>
      {highlights.highlights.map((highlight: any) => (
        <div class="grid grid-rows-[auto_auto] grid-cols-[auto_1fr] gap-3">
          <div
            class="hue-swing col-start-1 row-start-1 rounded-full"
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
      <span class="hue-swing text-orange-400">
        {langHelper(programs.title.part2)}
      </span>
    </div>
    <div class="text-gray-500 text-center my-5">
      {langHelper(programs.subtitle)}
    </div>
    {programs.programs.map((program: any) => (
      <ProgramCard program={program} />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <div class="bg-[var(--background-grey-1)] py-10">
    <div class="text-bold text-3xl text-center">
      {langHelper(testimonials.title)}
    </div>
    <div class="text-center">{langHelper(testimonials.subtitle)}</div>
    <div class="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-3 w-fit m-auto my-10">
      {testimonials.testimonials.map((testimonial: any) => (
        <TestimonialDialog class="" testimonial={testimonial} />
      ))}
    </div>
  </div>
);

type Testimonial = {
  title: LanguageObject;
  content: LanguageObject;
  avatar: string;
  customerName: LanguageObject;
  customerTitle: LanguageObject;
};

const TestimonialDialog = (props: {
  testimonial: Testimonial;
  class?: string;
}) => (
  <div class={`${props.class} my-3`}>
    <ArrowBox>
      <div class="text-bold text-xl text-center">
        {langHelper(props.testimonial.title)}
      </div>
      <div class="text-center text-gray-500">
        {langHelper(props.testimonial.content)}
      </div>
    </ArrowBox>
    <img
      class="block rounded-full h-[50px] w-[50px] mt-[20px] mx-auto"
      src={props.testimonial.avatar}
    />
    <div class="mt-[20px] mx-auto text-center">
      {langHelper(props.testimonial.customerName)}
    </div>
    <div class="mx-auto text-center text-sm text-gray-500">
      {langHelper(props.testimonial.customerTitle)}
    </div>
  </div>
);

const ArrowBox = (props: any) => (
  <div class="relative h-[150px] max-w-[350px] bg-[var(--background)] rounded-[10px] p-5 mx-auto">
    <div class="bg-[var(--background)] left-1/2 absolute bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-4 h-4 border-r border-b border-indigo-500"></div>
    {props.children}
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
          <div class="row-start-4 text-gray-500">
            <span>{langHelper("Application Cycle: ", "办理周期：")}</span>
            <span>{langHelper(program.applicationCycle)}</span>
          </div>
          <button
            class="hue-swing row-start-5 bg-blue-500 w-fit m-auto"
            onclick={() => startViewTransition(() => navigate(program.href))}
          >
            {langHelper("Explore subcategories", "探索子类别")}
          </button>
        </div>
      </div>
    </gaia-card>
  );
};
