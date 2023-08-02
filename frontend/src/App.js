// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import View from "./components/View";
import Categorize from "./components/Categorize";
import Cloze from "./components/Cloze";
import Comprehension from "./components/Comprehension";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/view" element={<View />} />
        <Route path="/categorize" element={<Categorize />} />
        <Route path="/cloze" element={<Cloze />} />
        <Route path="/comprehension" element={<Comprehension />} />
      </Routes>
    </div>
  );
}

export default App;
