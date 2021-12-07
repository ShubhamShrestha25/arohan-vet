import "./App.css";
import AboutIntro from "./pages/about/AboutIntro";
import Home from "./pages/home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<AboutIntro />} />
      </Routes>
    </div>
  );
}

export default App;
