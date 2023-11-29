import React from "react";

interface LocaleContextType {
  locale: string;
  setLocale: (newLocale: string) => void;
}

const defaultValue: LocaleContextType = {
  locale: "en",
  setLocale: () => {},
};

const LocaleContext = React.createContext(defaultValue);

export default LocaleContext;