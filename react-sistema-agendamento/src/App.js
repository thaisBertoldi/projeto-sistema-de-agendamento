import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Register from "./pages/Register/Register.page";
import Event from "./pages/Event/Event.page";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event/:id" element={<Event />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
