import { useState } from "react";
import {
  EnglandFlagIcon,
  GermanFlagIcon,
  RussianFlagIcon,
  SpanishFlagIcon,
} from "shared/assets/icons/countryFlags";
import { Dropdown, DropdownOption } from "../../shared/ui/Dropdown/";

const languageOptions: DropdownOption[] = [
  {
    title: "Русский",
    value: "russian",
    icon: <RussianFlagIcon />,
  },
  {
    title: "Английский",
    value: "english",
    icon: <EnglandFlagIcon />,
  },
  {
    title: "Испанский",
    value: "spanish",
    icon: <SpanishFlagIcon />,
  },
  {
    title: "Немецкий",
    value: "germany",
    icon: <GermanFlagIcon />,
  },
];

export const SelectLanguage = () => {
  const [language, setLanguage] = useState<DropdownOption | undefined>();

  const onChangeLanguages = (value: DropdownOption | undefined): void => {
    setLanguage(value);
  };

  return (
    <Dropdown
      label="Язык"
      multiple={false}
      options={languageOptions}
      value={language}
      showIcon={false}
      onChange={onChangeLanguages}
    />
  );
};
