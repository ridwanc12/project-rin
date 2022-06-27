import { useState } from "react";

import "./SearchPage.css";
import SearchBar from "./SearchBar";
import Grid from "./Grid";

function SearchPage() {
  const numResults = 15;

  const [searchText, setSearchText] = useState("");

  return (
    <div className="searchPage">
      <SearchBar setSearchText={setSearchText} />
      <Grid query={searchText} numResults={numResults} />
    </div>
  );
}

export default SearchPage;
