import { useLocation } from "react-router-dom";
import "./Info.css";

function Info() {
  const { state } = useLocation();
  let mal_id = state.mal_id;

  // Default value if mal_id undefined
  if (mal_id === undefined) {
    mal_id = 20;
  }

  return (
    <div className="info">
      <h1>{mal_id}</h1>
    </div>
  );
}

export default Info;
