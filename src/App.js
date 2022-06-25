import { Routes, Route } from "react-router-dom";

import Cards from "./components/Cards";
import Info from "./components/Info";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/project-rin" element={<Cards />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
