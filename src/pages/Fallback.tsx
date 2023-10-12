import "@gaia/garage";
import { useNavigate } from "@solidjs/router";
import { langHelper } from "../utils/language";
import { startViewTransition } from "../utils/startViewTransition";

function Fallback() {
  const navigate = useNavigate();
  return (
    <gaia-card class="absolute top-1/2 left-1/2 translate-[-50%] text-center">
      <h3 slot="header">{langHelper("Fallback Page", "后备页面")}</h3>
      {langHelper("This Page is not ready yet.", "这个页面还没有准备好。")}
      <br />
      <button
        class="hue-rotating row-start-5 bg-blue-500 w-fit m-auto mt-3"
        onclick={() => startViewTransition(() => navigate("/"))}
      >
        {langHelper("Go Back Home", "回到主页")}
      </button>
    </gaia-card>
  );
}

export default Fallback;
