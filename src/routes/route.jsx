import { Routes, Route } from "react-router";

function SpikeRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/support" element={<Support />} />
    </Routes>
  );
}

export default SpikeRoutes;