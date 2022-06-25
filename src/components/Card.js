import { useNavigate } from "react-router-dom";

import "./Card.css";

function Card(props) {
  const navigate = useNavigate();

  const handleCardClick = (mal_id) => {
    console.log("Card clicked: ", mal_id);
    navigate("/info", { state: { mal_id: mal_id } });
  };

  const cardInfo = props.cardInfo;

  return (
    <div onClick={() => handleCardClick(cardInfo.mal_id)} className="card">
      <div className="card__body">
        {
          <>
            <img
              src={cardInfo.images.jpg.large_image_url}
              alt="Show cover art"
              className="card__image"
            />
            <h3 className="card__title">{cardInfo.title}</h3>
          </>
        }
      </div>
    </div>
  );
}

export default Card;
