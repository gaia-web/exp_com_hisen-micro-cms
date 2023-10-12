import { useNavigate, Navigator as SolidNavigator } from "@solidjs/router";
import { langHelper } from "../utils/language";
import navItems from "../assets/nav-items.json";
import "@gaia/garage";
import { startViewTransition } from "../utils/startViewTransition";

type NavItem = {
  title: {
    en: string;
    cn?: string;
  };
  href?: string;
  children?: NavItem[];
};

function Nav() {
  const navigate = useNavigate();

  return (
    <gaia-nav slot="collapsible">
      {navItems.map((item) => renderNavItem(item as NavItem, navigate))}
    </gaia-nav>
  );
}

function renderNavItem(
  item: NavItem,
  navigate: SolidNavigator,
  nested = false
) {
  return (
    <gaia-nav-item
      slot={nested ? "nested" : ""}
      onclick={() => {
        if (item.href == null) {
          return;
        }
        startViewTransition(() => item.href && navigate(item.href));
      }}
    >
      {langHelper(item.title)}
      {item.children?.map((item) => renderNavItem(item, navigate, true))}
    </gaia-nav-item>
  );
}

export default Nav;
