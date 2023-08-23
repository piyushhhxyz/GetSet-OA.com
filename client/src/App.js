import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<div>Auth page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
