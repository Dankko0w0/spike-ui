import { Routes, Route } from "react-router-dom";
import Statistics from "./pages/Statistics";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Config from "./pages/Config";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/Error/404";
import ServiceUnavailable from "./pages/Error/503";
import Redirect from "./pages/Error/302";
import './styles/animation.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/statistics" element={<Statistics />} />
      <Route path="/config" element={<Config />} />
      <Route path="/task" element={<Task />} />
      <Route path="/support" element={<Support />} />

      <Route path="/settings" element={<Settings />} />
      <Route path="/profile" element={<Profile />} />

      <Route path="/503" element={<ServiceUnavailable />} />
      <Route path="/302" element={<Redirect />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
