import { useLocation } from "react-router-dom";

import "./Info.css";
import CardBody from "./CardBody";

function Info() {
  const { state } = useLocation();
  let cardInfo = state.cardInfo;

  return (
    <div className="info">
      <CardBody
        image={cardInfo.images.jpg.large_image_url}
        title={cardInfo.title}
      />
    </div>
  );
}

export default Info;
