import { useState } from "react";
import {
  EnglandFlagIcon,
  GermanFlagIcon,
  ItalianFlagIcon,
  PolandFlagIcon,
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
  const [languages, setLanguages] = useState<DropdownOption | undefined>();

  const onChangeLanguages = (value: DropdownOption): void => {
    setLanguages(value);
  };

  return (
    <Dropdown<DropdownOption>
      label="Язык"
      multiple={false}
      options={languageOptions}
      value={languages}
      onChange={onChangeLanguages}
    />
  );
};
