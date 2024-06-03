import "./App.css";
import Header from "./header/header";
import Homepage from "./homepage/homepage";
import Footer from "./footer/footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Menu/menu";
import Reservations from "./reservation/reservation";
import Contact from "./contact/contact";
import Delivery from "./delivery/delivery";
import Admin from "./admin/admin";
import Login from "./admin/adminLogin/adminlogin";
import Register from "./admin/adminLogin/adminregister";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { ProtectedRoute } from "./protectedRoute";
import { useState } from "react";
import { auth } from "./admin/adminLogin/firebase";

function App() {
  const [user, setUser] = useState(null);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setIsFetching(false);
        return;
      }
      setUser(null);
      setIsFetching(false);
    });
    return () => unsubscribe();
  }, []);

  if (isFetching) {
    <h1>Loading...</h1>;
  }

  return (
    <div>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <div className="homepage">
                  <Homepage />
                </div>
              }
            />
            <Route path="menu" element={<Menu />} />
            <Route path="reservations" element={<Reservations />} />
            <Route path="contact" element={<Contact />} />
            <Route path="delivery" element={<Delivery />} />
            {/* <Route path="admin" element={<Admin />} /> */}
            {/* <Route
              path="admin"
              element={
                <ProtectedRoute user={user}>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login user={user} />} /> */}
            <Route path="admin" element={<Admin />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
