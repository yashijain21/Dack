import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Dack/Home";
import SummerTyresPage from "./Pages/SummerTyresPage";
import WinterTyresPage from "./Pages/WinterTyresPage";
import SummerWheels from "./Pages/SummerWheels"; // ✅ correct folder casing
import WinterWheels from "./Pages/WinterWheels"; // ✅ correct folder casing
import Product from "./Product/product"; // ✅ correct folder casing





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dack/sommardack" element={<SummerTyresPage />} />
        <Route path="/Dack/vinterdack" element={<WinterTyresPage />} />
        <Route path="/sommarhjul" element={<SummerWheels />} />
        <Route path="/vinterhjul" element={<WinterWheels />} />
                <Route path="/product" element={<Product />} />




      </Routes>
    </Router>
  );
}

export default App;


