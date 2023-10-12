import { useNavigate } from "@solidjs/router";
import { langHelper } from "../utils/language";
import { startViewTransition } from "../utils/startViewTransition";

function Fallback() {
  const navigate = useNavigate();
  return (
    <div>
      This Page is not ready yet.
      <br />
      <button
        class="hue-rotating row-start-5 bg-blue-500 w-fit m-auto"
        onclick={() => startViewTransition(() => navigate("/"))}
      >
        {langHelper("Go Back Home", "回到主页")}
      </button>
    </div>
  );
}

export default Fallback;
