import { Accessor, Setter, createContext, useContext } from "solid-js";

const defaultValue: {
  isEnglish: Accessor<boolean>;
  setIsEnglish: Setter<boolean>;
} = { isEnglish: () => false, setIsEnglish: () => null };
export const LanguageContext = createContext(defaultValue);

export function langHelper(en: string, zh?: string | null) {
  const { isEnglish } = useContext(LanguageContext);
  return (isEnglish() ? en : zh) ?? en;
}
