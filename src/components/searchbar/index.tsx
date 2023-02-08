import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useAppDispatch } from '../../store/hook';
import style from './style.module.scss';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState<string>('') // value search user want
  const debouncedSearchTerm = useDebounce(searchTerm, 500) // debounce for 500ms
  const dispatch = useAppDispatch()
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
        if(!debouncedSearchTerm) return;
        const payload = {
            q: debouncedSearchTerm,
            page: 1,
            per_page: 5
        }
        dispatch({type: 'SEARCH_GITHUB_USER', payload})
  },[debouncedSearchTerm])
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