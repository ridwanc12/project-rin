import { useNavigate } from "react-router-dom";

import "./Card.css";
import CardBody from "./CardBody";

function Card(props) {
  const navigate = useNavigate();

  function handleCardClick() {
    navigate("/info", { state: { cardInfo: cardInfo } });
  }

  // NOTE: This function is equivalent to the above (arrow function)
  // See https://stackoverflow.com/questions/49306148/
  // const handleCardClick = () => {
  //   navigate("/info", { state: { cardInfo: cardInfo } });
  // };

  const cardInfo = props.cardInfo;

  return (
    <div onClick={handleCardClick} className="card">
      <CardBody
        image={cardInfo.images.jpg.large_image_url}
        title={cardInfo.title}
      />
    </div>
  );
}

export default Card;
