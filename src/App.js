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

function App() {
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
            <Route path="admin" element={<Admin />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
