import React, { useRef, useState } from "react";
import styles from "./Dropdown.module.css";
import cn from "classnames";
import { ArrowIcon } from "shared/assets/icons/ArrowIcon";
import { SearchIcon } from "shared/assets/icons/SearchIcon";
import { CloseIcon } from "shared/assets/icons/CloseIcon";
import { useOnClickOutside } from "shared/hooks/useClickOutside";

export interface DropdownOption {
  title: string;
  value: string;
  icon?: JSX.Element;
}

type DropdownValue<T> = T extends DropdownOption[] ? DropdownOption[] : DropdownOption | undefined;

interface DropdownProps<T> {
  label?: string;
  multiple?: boolean;
  options: DropdownOption[];
  value: DropdownValue<T>;
  showIcon?: boolean;
  onChange: (value: any) => void;
}

const valueIsArray = (
  value: DropdownOption | DropdownOption[] | undefined
): value is Array<DropdownOption> => {
  return Array.isArray(value);
};

export const Dropdown = <T extends DropdownOption[] | DropdownOption>(
  props: DropdownProps<T>
): JSX.Element => {
  const { multiple = false, showIcon = true, options, onChange, value, label } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((option) =>
    option.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const openDropdownMenu = (): void => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const checkOption = (option: DropdownOption): boolean => {
    if (valueIsArray(value)) {
      return value.find((item) => item.value === option.value) ? true : false;
    } else {
      return option.value === value?.value;
    }
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>, option: DropdownOption) => {
    if (valueIsArray(value)) {
      const newValue = !e.target.checked
        ? value.filter((item) => item.value !== option.value)
        : [...value, option];
      onChange(newValue);
    } else {
      onChange(option);
    }
  };

  const deleteOption = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    option: DropdownOption
  ): void => {
    e.stopPropagation();
    if (valueIsArray(value)) {
      const newValue = value.filter((item) => item.value !== option.value);
      onChange(newValue);
    }
  };

  const onClickOutsideDropdownMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  useOnClickOutside(dropdownMenuRef, onClickOutsideDropdownMenu);

  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <span className={styles.value} onClick={openDropdownMenu}>
        {valueIsArray(value)
          ? value.map((item) => (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={styles["value-item"]}
                key={item.value}
              >
                <span>{item.title}</span>
                <CloseIcon onClick={(e) => deleteOption(e, item)} />
              </span>
            ))
          : value?.title && (
              <>
                {showIcon && value.icon && <span>{value.icon}</span>}
                <span>{value.title}</span>
              </>
            )}
        <ArrowIcon className={cn(styles.arrow, { [styles["arrow-active"]]: isOpen })} />
      </span>
      <div
        ref={dropdownMenuRef}
        className={cn(styles["dropdown-menu"], { [styles["dropdown-menu-open"]]: isOpen })}
      >
        <div className={styles["search-wrapper"]}>
          <div className={styles.search}>
            <SearchIcon className={styles["search-icon"]} />
            <input
              className={styles["search-input"]}
              value={searchQuery}
              onChange={onChangeSearchQuery}
              type="text"
              placeholder="Поиск"
            />
          </div>
        </div>
        <ul className={styles.options}>
          {filteredOptions.map((option) => (
            <li key={option.value} className={styles.option}>
              <div className={styles.title}>
                {showIcon && option.icon && <span>{option.icon}</span>}
                <span>{option.title}</span>
              </div>
              <input
                checked={checkOption(option)}
                onChange={(e) => changeValue(e, option)}
                type="checkbox"
                className={styles.checkbox}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
