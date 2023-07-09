import "./App.css";
import { Route, Routes } from "react-router";
import { Continent } from "./pages/Continent";
import { Country } from "./pages/Country";
import { Destinations } from "./pages/Destinations";
import { DestinationDetail } from "./pages/DestinationDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Continent />} />
        <Route path="/:country" element={<Country />} />
        <Route path="/:destination" element={<Destinations />} />
        <Route path="/destination/:detail" element={<DestinationDetail />} />
      </Routes>
    </div>
  );
}

export default App;
