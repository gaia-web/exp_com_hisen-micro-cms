import { useContext } from "solid-js";
import { LanguageContext, langHelper } from "../utils/language";
import "@gaia/garage";
import Nav from "./Nav";

function Header() {
  const { setIsEnglish } = useContext(LanguageContext);

  return (
    <gaia-header prop:sticky={true}>
      <img src="/images/logo.webp" height="50px" />
      <button
        slot="extra"
        onclick={() => setIsEnglish((isEnglish) => !isEnglish)}
        class="hue-rotating bg-[#F687B3]"
      >
        {langHelper("中文", "English")}
      </button>
      <Nav />
    </gaia-header>
  );
}

export default Header;
