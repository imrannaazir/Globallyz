import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import MarketingService from "../pages/MarketingService";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/marketing-service" element={<MarketingService />} />
    </Routes>
  );
};

export default App;
