import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IndexView from "./views/IndexView";
import DashboardView from "./views/DashboardView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexView />} />
        <Route path="/dashboard" element={<DashboardView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
