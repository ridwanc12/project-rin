import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Grid.css";
import { createSearchJikanURL } from "./Jikan";
import Card from "./Card";

function Grid(props) {
  const navigate = useNavigate();

  const handleCardClick = (selected_id) => {
    console.log("Card Clicked: ", selected_id);
    navigate("/info", { state: { mal_id: selected_id } });
  };

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
            <Card handleCardClick={handleCardClick} result={result} />
          </li>
        ))}
    </ul>
  );
}

export default Grid;
