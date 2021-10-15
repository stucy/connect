import { useRef } from 'react';

import './SearchInput.css';

import { FiSearch } from "react-icons/fi";

const SearchInput = ({placeholder, handle}) => {

    const searchRef = useRef();

    const handleSearch = () => {
        let searchVal = searchRef.current.value;
        handle(searchVal);
    }

    return (
        <form className='search-input-container' onSubmit={handleSearch}>
            <input className="search-input" type='text' name="search" ref={searchRef} placeholder={placeholder} />
            <button className="search-btn" type='submit' ><FiSearch className="search-icon"/></button>
        </form>
    );
}

export default SearchInput;