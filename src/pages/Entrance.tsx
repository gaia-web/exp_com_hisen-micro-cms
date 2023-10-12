import "@gaia/garage";
import "@awesome-elements/markdown";
import { useParams } from "@solidjs/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { createEffect, createSignal } from "solid-js";
import modestCSS from "../assets/markdown-modest.css?inline";

const BASE_PATH = "/entrances";

function Entrance() {
  const { id } = useParams();
  const [markdown, setMarkdown] = createSignal("");
  createEffect(async () => {
    const content = await fetch(`${BASE_PATH}/${id}.md`).then((response) =>
      response.text()
    );
    setMarkdown(() => content);
  });
  return (
    <>
      <Header />
      <awesome-markdown
        // TODO should set it as block in awesome-markdown lib
        class="hue-rotating block max-w-[1280px] mx-auto my-3 rounded-[10px]"
        prop:markdown={markdown()}
        prop:styleSheets={[modestCSS, /* css */ ":host { background: #EDF2F7; padding: 10px; } img { width: 100%; }"]}
      />
      <Footer />
    </>
  );
}

export default Entrance;
