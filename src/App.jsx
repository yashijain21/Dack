import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Dack/Home";
import SummerTyresPage from "./Pages/SummerTyresPage";
import WinterTyresPage from "./Pages/WinterTyresPage";
import SummerWheels from "./Pages/SummerWheels"; // ✅ correct folder casing
import WinterWheels from "./Pages/WinterWheels"; // ✅ correct folder casing
import Product from "./Product/product"; // ✅ correct folder casing
import AddProductForm from "./Product/AddProduct";
import TyrChange from "./Pages/TyreChange";
import DackHotel from "./Pages/Deckhotel";
import RimRestoration from "./Pages/RimRestoration";
import WheelAlginment from "./Pages/WheelAlingment";
import Layout from "./Layout";



function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Dack/sommardack" element={<SummerTyresPage />} />
          <Route path="/Dack/vinterdack" element={<WinterTyresPage />} />
          <Route path="/sommarhjul" element={<SummerWheels />} />
          <Route path="/vinterhjul" element={<WinterWheels />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/add-product" element={<AddProductForm />} />
          <Route path="/verkstad/dacktjanster/dackbyte/" element={<TyrChange />} />
          <Route path="/verkstad/dacktjanster/dackhotell/" element={<DackHotel />} />
          <Route path="/verkstad/dacktjanster/falgrenovering/" element={<RimRestoration />} />
          <Route path="/verkstad/dacktjanster/hjulinstallning/" element={<WheelAlginment />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


