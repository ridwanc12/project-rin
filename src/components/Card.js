import { useNavigate } from "react-router-dom";

import "./Card.css";
import CardBody from "./CardBody";

function Card(props) {
  const navigate = useNavigate();

  const handleCardClick = (cardInfo) => {
    console.log("Card clicked: ", cardInfo.mal_id);
    navigate("/info", { state: { cardInfo: cardInfo } });
  };

  const cardInfo = props.cardInfo;

  return (
    <div onClick={() => handleCardClick(cardInfo)} className="card">
      <CardBody
        image={cardInfo.images.jpg.large_image_url}
        title={cardInfo.title}
      />
    </div>
  );
}

export default Card;
