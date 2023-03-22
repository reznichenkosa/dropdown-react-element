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
  {
    title: "Итальянский",
    value: "italian",
    icon: <ItalianFlagIcon />,
  },
  {
    title: "Польский",
    value: "poland",
    icon: <PolandFlagIcon />,
  },
];

export const SelectLanguages = () => {
  const [languages, setLanguages] = useState<DropdownOption[]>([]);

  const onChangeLanguages = (value: DropdownOption[]): void => {
    setLanguages(value);
  };

  return (
    <Dropdown<DropdownOption[]>
      label="Язык"
      options={languageOptions}
      value={languages}
      onChange={onChangeLanguages}
    />
  );
};
