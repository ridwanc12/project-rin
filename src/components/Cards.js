import { useEffect, useState } from "react";
import { createSearchJikanURL } from "./Jikan";

import "./Cards.css";
import { useNavigate } from "react-router-dom";

function Cards(props) {
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
    <ul className="cards">
      {Array.isArray(showResults) &&
        showResults.length &&
        showResults.map((result) => (
          <li key={result.mal_id}>
            <div
              onClick={() => handleCardClick(result.mal_id)}
              className="card"
            >
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
