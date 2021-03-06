import { Routes, Route } from "react-router-dom";

import "./App.css";
import SearchPage from "./components/SearchPage";
import InfoPage from "./components/InfoPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/project-rin" element={<SearchPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </div>
  );
}

export default App;
