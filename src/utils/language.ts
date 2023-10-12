import { Accessor, Setter, createContext, useContext } from "solid-js";

const defaultValue: {
  isEnglish: Accessor<boolean>;
  setIsEnglish: Setter<boolean>;
} = { isEnglish: () => false, setIsEnglish: () => null };
export const LanguageContext = createContext(defaultValue);

export function langHelper(content: { en: string; zh?: string | null }): string;
export function langHelper(en: string, zh?: string | null): string;
export function langHelper(
  ...args:
    | [{ en: string; zh?: string | null }]
    | [en: string, zh?: string | null]
) {
  let en: string;
  let zh: string | null | undefined;
  switch (typeof args[0]) {
    case "object":
      en = (args[0] as { en: string; zh?: string | null })?.en ?? "";
      zh = (args[0] as { en: string; zh?: string | null })?.zh;
      break;
    case "string":
      en = args[0];
      zh = args[1];
      break;
  }
  const { isEnglish } = useContext(LanguageContext);
  return (isEnglish() ? en : zh) ?? en;
}
