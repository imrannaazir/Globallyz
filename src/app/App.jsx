import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MarketingService from "../pages/MarketingService";
import Team from "../pages/Team";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketing-service" element={<MarketingService />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
};

export default App;
