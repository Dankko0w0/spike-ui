import { Routes, Route } from "react-router";

function SpikeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default SpikeRoutes;