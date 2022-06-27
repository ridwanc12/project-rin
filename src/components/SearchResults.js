import { useEffect, useState } from "react";

import { createSearchJikanURL } from "./Jikan";

function SearchResults(query, numResults) {
  const [showResults, setShowImage] = useState(null);

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
        console.error("Request failed: ", error);
      });
  }, [query, numResults]);

  return showResults;
}

export default SearchResults;
