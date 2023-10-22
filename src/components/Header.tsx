import { useContext } from "solid-js";
import { LanguageContext, langHelper } from "../utils/language";
import "@gaia/garage";
import Nav from "./Nav";

function Header() {
  const { setIsEnglish } = useContext(LanguageContext);

  return (
    <gaia-header prop:sticky={true} class="bg-[var(--background)]">
      {/* TODO should use another logo instead of just invert its color */}
      <img src="/images/logo.webp" height="50px" class=" @dark:invert" />
      <button
        slot="extra"
        onclick={() => setIsEnglish((isEnglish) => !isEnglish)}
        class="hue-swing bg-[#F687B3]"
      >
        {langHelper("中文", "English")}
      </button>
      <Nav />
    </gaia-header>
  );
}

export default Header;
