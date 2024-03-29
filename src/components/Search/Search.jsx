import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useDebounce } from '../../utilities/CustomHook/Debounce';

const Search = ({ search, clear }) => {
  const [searchText, setSearchText] = useState('');
  const debounceChangeHandler = useDebounce(() => {
    search(searchText);
  }, 1000);

  const handleSearch = (event) => {
    const searchTerm = event.target.value.trim();
    setSearchText(searchTerm);

    if(searchTerm.length > 2) {
      debounceChangeHandler();
    }

  }

  const handleClearSearch = () => {
    setSearchText('');
    clear();
  }

  return(
    <div className='searchContainer'>
      <input
        type="text"
        value={searchText}
        placeholder="Search..."
        className={styles.searchInput}
        onChange={handleSearch}
      />
      <button
        className={styles.crossBtn}
        onClick={handleClearSearch}
      >
        <FontAwesomeIcon icon={faCircleXmark} className={styles.crossIcon}/>
      </button>
    </div>
  )
}

export default Search;