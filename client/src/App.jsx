// import React from "react";
// import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Upload from "./pages/Upload";
// import CompanyPage from "./pages/CompanyPage";
// // import Loader from "./components/Loader";

// export default function App() {
//   const [user, setUser] = React.useState(null);
//   const [isLoading, setLoading] = React.useState(true);


//   React.useEffect(() => {
//     const getUser = () => {
//       fetch("http://localhost:4000/auth/login/success", {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Credentials": true,
//         },
//       })
//         .then((response) => {
//           if (response.status === 200) return response.json();
//           throw new Error("Authentication has failed!");
//         })
//         .then((resObject) => setUser(resObject.user))
//         .catch((err) => console.log(err));
//     };
//     getUser();
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={user ? <Navigate to="/home" /> : <Login />} />
//         {user ? (
//           <>
//             <Route path="/home" element={<Home user={user} />} />
//             <Route path="/upload" element={<Upload user={user} />} />
//             <Route path="/home/:companyName" element={<CompanyPage user={user} />} />
//           </>
//         ) : (
//           <Route
//             path="/home"
//             element={<Navigate to="/auth" />}
//           />
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// }
// import React from "react";
// import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
// import Landing from "./pages/Landing";
// import Login from "./pages/Login";
// import Home from "./pages/Home";
// import Upload from "./pages/Upload";
// import CompanyPage from "./pages/CompanyPage";
// // import Loader from "./components/Loader";

// export default function App() {
//   const [user, setUser] = React.useState(null);

//   React.useEffect(() => {
//     const getUser = () => {
//       fetch("http://localhost:4000/auth/login/success", {
//         method: "GET",
//         credentials: "include",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//           "Access-Control-Allow-Credentials": true,
//         },
//       })
//         .then((response) => {
//           if (response.status === 200) return response.json();
//           throw new Error("Authentication has failed!");
//         })
//         .then((resObject) => setUser(resObject.user))
//         .catch((err) => console.log(err));
//     };
//     getUser();
//   }, []);

//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={user ? <Navigate to="/home" /> : <Login />} />
//         {user ? (
//           <>
//             <Route path="/home" element={<Home user={user} />} />
//             <Route path="/upload" element={<Upload user={user} />} />
//             <Route path="/home/:companyName" element={<CompanyPage user={user} />} />
//           </>
//         ) : (
//           <Route
//             path="/home"
//             element={<Navigate to="/auth" />}
//           />
//         )}
//       </Routes>
//     </BrowserRouter>
//   );
// }
import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import CompanyPage from "./pages/CompanyPage";
import Footer from "./components/Footer";
export default function App() {
  const [user, setUser] = React.useState(null);
  // const [isLoading, setLoading] = React.useState(true);

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
          // setLoading(false); 
        })
        .catch((err) => {
          console.log(err);
          // setLoading(false);
        });
    };
    getUser();
  }, []);

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={user ? <Navigate to="/home" /> : <Login />} />
        {user ? (
          <>
            <Route path="/home" element={<Home user={user} />} />
            <Route path="/upload" element={<Upload user={user} />} />
            <Route path="/home/:companyName" element={<CompanyPage user={user} />} />
          </>
        ) : (
          <Route
            path="/home"
            element={<Navigate to="/auth" />}
          />
        )}
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}