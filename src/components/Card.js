import "./Card.css";

function Card(props) {
  const handleCardClick = props.handleCardClick;
  const result = props.result;

  return (
    <div onClick={() => handleCardClick(result.mal_id)} className="card">
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
  );
}

export default Card;
