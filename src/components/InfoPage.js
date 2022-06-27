import { useLocation } from "react-router-dom";

import "./InfoPage.css";
import CardBody from "./CardBody";

function InfoPage() {
  const { state } = useLocation();
  let cardInfo = state.cardInfo;

  return (
    <div className="infoPage">
      <CardBody
        image={cardInfo.images.jpg.large_image_url}
        title={cardInfo.title}
      />
    </div>
  );
}

export default InfoPage;
