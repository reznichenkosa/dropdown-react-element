import { FC } from "react";
import { DropdownOption } from "../../Dropdown";
import styles from "./OptionsList.module.css";

interface OptionsListProps {
  options: DropdownOption[];
  showIcon: boolean;
  checkIsSelectOption: (option: DropdownOption) => boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>, option: DropdownOption) => void;
}

export const OptionsList: FC<OptionsListProps> = ({
  options,
  showIcon,
  checkIsSelectOption,
  onChange,
}) => {
  return (
    <ul className={styles.options}>
      {options.map((option) => (
        <li key={option.value} className={styles.option}>
          <div className={styles.title}>
            {showIcon && option.icon && <span>{option.icon}</span>}
            <span>{option.title}</span>
          </div>
          <input
            checked={checkIsSelectOption(option)}
            onChange={(e) => onChange(e, option)}
            type="checkbox"
            className={styles.checkbox}
          />
        </li>
      ))}
    </ul>
  );
};
