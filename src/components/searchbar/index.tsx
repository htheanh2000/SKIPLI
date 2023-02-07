import React, { ChangeEvent, useRef, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import style from './style.module.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('') // value search user want
  const debouncedSearchTerm = useDebounce(searchTerm, 500) // debounce for 500ms
  const searchInputRef = useRef<HTMLInputElement>(null)
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className={style['search-bar']}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;