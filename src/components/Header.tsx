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
        style="background: #F687B3"
        class="hue-rotating"
      >
        {langHelper("中文", "English")}
      </button>
      <Nav />
    </gaia-header>
  );
}

export default Header;
