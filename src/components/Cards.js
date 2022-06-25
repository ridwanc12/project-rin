import { useEffect, useState } from "react";
import { createSearchJikanURL } from "./Jikan";

import "./Cards.css";

const handleCardClick = (event) => {
  console.log("Card Clicked: ", event.currentTarget);
};

function Cards(props) {
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
    <ul className="cards">
      {Array.isArray(showResults) &&
        showResults.length &&
        showResults.map((result) => (
          <li key={result.mal_id}>
            <div onClick={handleCardClick} className="card">
              <div className="card__body">
                {
                  <>
                    <img
                      src={result.images.jpg.large_image_url}
                      alt="Show cover art"
                      className="card__image"
                    />
                    <h3 className="card__title">{result.title}</h3>
                  </>
                }
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default Cards;
