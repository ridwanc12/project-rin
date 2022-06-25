import { Routes, Route } from "react-router-dom";

import Grid from "./components/Grid";
import Info from "./components/Info";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Grid />} />
        <Route path="/project-rin" element={<Grid />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
