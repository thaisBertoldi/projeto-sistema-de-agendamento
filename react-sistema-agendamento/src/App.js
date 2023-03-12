import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.page";
import Register from "./pages/Register/Register.page";
import Event from "./pages/Event/Event.page";
import List from "./pages/List/List.page";
import NavBar from "./components/NavBar/NavBar.component";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/event/:id" element={<Event />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
