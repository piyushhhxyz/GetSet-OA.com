import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import CompanyPage from "./pages/CompanyPage";
import Offcampus from "./pages/Offcampus";
import Interview from "./pages/interview";
import Sources from "./pages/sources";

export default function App() {
  const [user, setUser] = React.useState(null);
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const getUser = () => {
      setLoading(true);
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
          throw new Error("Authentication has failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    };
    getUser();
  }, []);

  // if (isLoading) {
  //   return <h1>nfnf</h1>;
  // }
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/auth"
          element={user ? <Navigate to="/home" /> : <Login />}
        />
        {user ? (
          <>
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/upload" element={<Upload user={user} />} />
            <Route
              path="/home/:companyName"
              element={<CompanyPage user={user} />}
            />
            <Route path="/offcampus" element={<Offcampus user={user} />} />
            <Route path="/interview" element={<Interview user={user} />} />
            <Route path="/resources" element={<Sources user={user} />} />
          </>
        ) : (
          <Route path="/home" element={<Navigate to="/auth" />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}
