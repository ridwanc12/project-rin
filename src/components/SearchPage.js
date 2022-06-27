import "./SearchPage.css";
import SearchBar from "./SearchBar";
import Grid from "./Grid";

function SearchPage() {
  let query = "Naruto";
  let numResults = 15;

  return (
    <div className="searchPage">
      <SearchBar />
      <Grid query={query} numResults={numResults} />
    </div>
  );
}

export default SearchPage;
