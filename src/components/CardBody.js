import "./CardBody.css";

function CardBody(props) {
  return (
    <div className="card__body">
      {
        <>
          <img
            src={props.image}
            alt="Error getting anime cover art"
            className="card__image"
          />
          <h3 className="card__title">{props.title}</h3>
        </>
      }
    </div>
  );
}

export default CardBody;
