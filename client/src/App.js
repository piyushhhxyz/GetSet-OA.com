import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landin";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>``
      </BrowserRouter>
    </div>
  );
}

