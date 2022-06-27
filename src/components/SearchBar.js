import { useRef } from "react";

import "./SearchBar.css";

function SearchBar({ setSearchText }) {
  const inputRef = useRef(null);

  function handleSearchButtonClick() {
    setSearchText(inputRef.current.value);
    inputRef.current.value = "";
  }

  function handleSearchBoxKeyPress(e) {
    if (e.key === "Enter") {
      setSearchText(inputRef.current.value);
      inputRef.current.value = "";
    }
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        className="searchBox"
        ref={inputRef}
        onKeyDown={(e) => {
          handleSearchBoxKeyPress(e);
        }}
      />
      <button onClick={handleSearchButtonClick} className="searchButton">
        Search
      </button>
    </div>
  );
}

export default SearchBar;
