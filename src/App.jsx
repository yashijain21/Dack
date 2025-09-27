import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Dack/Home";
import SummerTyresPage from "./Pages/SummerTyresPage"; // ✅ correct folder casing

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sommardack" element={<SummerTyresPage />} />
      </Routes>
    </Router>
  );
}

export default App;
