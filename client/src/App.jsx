import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import CompanyPage from "./pages/CompanyPage";
import Loader from "./components/Loader";

export default function App() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:4000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication has been failed!");
        })
        .then((resObject) => setUser(resObject.user))
        .catch((err) => console.log(err));
    };
    getUser();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Login />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/upload" element={<Upload user={user} />} />
        <Route
          path="/home/:companyName"
          element={<CompanyPage user={user} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
