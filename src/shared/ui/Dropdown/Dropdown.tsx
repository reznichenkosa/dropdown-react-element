import React, { FC, useRef, useState } from "react";
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

interface MultipleDropdownProps {
  multiple: true;
  value: DropdownOption[];
  onChange: (value: DropdownOption[]) => void;
}

interface SingleDropdownProps {
  multiple: false;
  value: DropdownOption | undefined;
  onChange: (value: DropdownOption | undefined) => void;
}

interface DropdownCommonProps {
  label?: string;
  options: DropdownOption[];
  showIcon?: boolean;
}

type DropdownProps = DropdownCommonProps & (MultipleDropdownProps | SingleDropdownProps);

export const Dropdown: FC<DropdownProps> = (props) => {
  const { multiple, showIcon = true, options, onChange, value, label } = props;
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownMenuRef = useRef<HTMLDivElement>(null);
  const valueRef = useRef<HTMLSpanElement>(null);

  const filteredOptions = options.filter((option) =>
    option.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const onChangeSearchQuery = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuery(e.target.value);
  };

  const toggleOpenDropdownMenu = (): void => {
    setIsOpen((prev) => !prev);
  };

  const checkIsSelectOption = (option: DropdownOption): boolean => {
    if (multiple) {
      return value.find((item) => item.value === option.value) ? true : false;
    } else {
      return option.value === value?.value;
    }
  };

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>, option: DropdownOption) => {
    if (multiple) {
      const newValue = !e.target.checked
        ? value.filter((item) => item.value !== option.value)
        : [...value, option];
      onChange(newValue);
    } else {
      const newValue = value?.value === option.value ? undefined : option;

      onChange(newValue);
    }
  };

  const onRemoveOption = (
    e: React.MouseEvent<SVGSVGElement, MouseEvent>,
    option: DropdownOption
  ): void => {
    e.stopPropagation();
    if (multiple) {
      const newValue = value.filter((item) => item.value !== option.value);
      onChange(newValue);
    }
  };

  const hideDropdownMenu = (e: Event) => {
    const el = valueRef?.current;
    if (!el || el.contains((e?.target as Node) || null)) {
      return;
    }
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        setSearchQuery("");
      }, 300);
    }
  };

  useOnClickOutside(dropdownMenuRef, hideDropdownMenu);

  return (
    <div className={styles.wrapper}>
      {label && <span className={styles.label}>{label}</span>}
      <span ref={valueRef} className={styles.value} onClick={toggleOpenDropdownMenu}>
        {multiple
          ? value.map((item) => (
              <span
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className={styles["value-item"]}
                key={item.value}
              >
                <span>{item.title}</span>
                <CloseIcon onClick={(e) => onRemoveOption(e, item)} />
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
                checked={checkIsSelectOption(option)}
                onChange={(e) => onChangeValue(e, option)}
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
