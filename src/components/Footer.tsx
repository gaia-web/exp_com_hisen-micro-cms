import "@gaia/garage";
import { langHelper } from "../utils/language";
import footerInfo from "../assets/footer.json";

function Footer() {
  return (
    <div class="relative grid grid grid-cols-[1fr_auto_auto_auto_1fr] gap-x-5 py-5 bg-[#F7FAFC]">
      <div class="col-start-2">
        <span class="font-bold">{langHelper("Address: ", "地址：")}</span>
        <span class="font-bold">{langHelper(footerInfo.address.en)}</span>
      </div>
      <div class="col-start-3">
        <span class="font-bold">{langHelper("Tel: ", "电话：")}</span>
        <span class="font-bold">{langHelper(footerInfo.tel)}</span>
      </div>
      <div class="col-start-4">{langHelper(footerInfo.copyright)}</div>
    </div>
  );
}

export default Footer;
