import { FC } from "react";
import { SearchIcon } from "shared/assets/icons/SearchIcon";
import styles from "./SearchInput.module.css";

interface SearchInputProps {
  searchQuery: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput: FC<SearchInputProps> = ({ searchQuery, onChange }) => {
  return (
    <div className={styles.search}>
      <SearchIcon className={styles["search-icon"]} />
      <input
        className={styles["search-input"]}
        value={searchQuery}
        onChange={onChange}
        type="text"
        placeholder="Поиск"
      />
    </div>
  );
};
