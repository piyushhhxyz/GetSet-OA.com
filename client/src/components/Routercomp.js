import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "../pages/Landing";
function Routercomp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<>parv is on Login page</>} />
      </Routes>
    </BrowserRouter>
  );
}
export default Routercomp;
