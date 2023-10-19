import "@gaia/garage";
import { useNavigate } from "@solidjs/router";
import { langHelper } from "../utils/language";
import { startViewTransition } from "../utils/startViewTransition";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Fallback() {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <gaia-card class="my-[200px] mx-auto w-fit text-center">
        <h3 slot="header">{langHelper("Fallback Page", "后备页面")}</h3>
        {langHelper("This Page is not ready yet.", "这个页面还没有准备好。")}
        <br />
        <button
          class="hue-swing row-start-5 bg-blue-500 w-fit m-auto mt-3"
          onclick={() => startViewTransition(() => navigate("/"))}
        >
          {langHelper("Go Back Home", "回到主页")}
        </button>
      </gaia-card>
      <Footer />
    </>
  );
}

export default Fallback;
