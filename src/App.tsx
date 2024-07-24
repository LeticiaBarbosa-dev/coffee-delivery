import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Checkout } from "./pages/Checkout/Checkout";
import { Success } from "./pages/Success/Success";



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
