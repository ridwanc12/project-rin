import { useEffect, useState } from "react";

import "./Grid.css";
import { createSearchJikanURL } from "./Jikan";
import Card from "./Card";

function Grid() {
  const [showResults, setShowImage] = useState(null);

  const query = "Naruto";
  const numResults = 10;

  useEffect(() => {
    fetch(createSearchJikanURL(query, numResults))
      .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong with the request to Jikan.");
        }

        return response.json();
      })
      .then((json) => {
        setShowImage(json.data);
      })
      .catch((error) => {
        console.error("Request failed", error);
      });
  }, []);

  return (
    <ul className="grid">
      {Array.isArray(showResults) &&
        showResults.length &&
        showResults.map((result) => (
          <li key={result.mal_id}>
            <Card cardInfo={result} />
          </li>
        ))}
    </ul>
  );
}

export default Grid;
