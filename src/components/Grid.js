import "./Grid.css";
import Card from "./Card";
import SearchResults from "./SearchResults";

// NOTE: This is deconstruction of the 'props' variable into query and numResults
function Grid({ query, numResults }) {
  const showResults = SearchResults(query, numResults);

  if (!Array.isArray(showResults) || !showResults.length) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  const cards = showResults.map((result) => (
    <li key={result.mal_id}>
      <Card cardInfo={result} />
    </li>
  ));

  return (
    <div>
      <ul className="grid">{cards}</ul>
    </div>
  );
}

export default Grid;
