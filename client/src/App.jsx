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
import Oaupload from "./pages/upload/Oaupload";
import OffcampusUpload from "./pages/upload/OffcampusUpload";
import ResourceUpload from "./pages/upload/ResourceUpload";

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
          throw new Error("Authentication has failed!");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  
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
            <Route path="/upload/OA" element={<Oaupload />} />
            <Route path="/upload/offcampus" element={<OffcampusUpload />} />
            <Route path="/upload/resources" element={<ResourceUpload />} />

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
