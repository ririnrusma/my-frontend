import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Import Admin 
import { SepedaProvider } from "./context/SepedaContext";
import Header from "./component/admin/Header";
import Sidebar from "./component/admin/Sidebar";
import Dashboard from "./pages/admin/Dashboard";
import JenisSepeda from "./pages/admin/JenisSepeda";
import Transaksi from "./pages/admin/Transaksi";
import Pengguna from "./pages/admin/Pengguna";
import Loginadmin from "./pages/admin/Loginadmin";
import TambahSepeda from "./pages/admin/TambahSepeda";
import EditSepeda from "./pages/admin/EditSepeda";

// Import User 
import Login from "./pages/user/login-signup/Login";
import Lokasi from "./pages/user/Lokasi/Lokasi";
import AkunProfil from "./pages/user/Profil/AkunProfil";
import DaftarSepeda from "./pages/user/Daftar Sepeda/DaftarSepeda";
import Rental from "./pages/user/Rental/Rental";
import Sewa from "./pages/user/Rental/Sewa";
import RentalAcc from "./pages/user/Rental/RentalAcc";
import Beranda from "./pages/user/Beranda/Beranda";
import Kontak from "./pages/user/Kontak kami/Kontak";
import TransaksiUser from "./pages/user/Rental/TransaksiUser";
import Register from "./pages/user/login-signup/Register";
import Konfirmasi from "./pages/user/Kontak kami/Konfirmasi";
import Pembayaran from "./pages/user/Rental/pembayaran";
import Navbar from "./component/user/navbar/Navbar";
import Footer from "./component/user/footer/Footer";

// PrivateRoute component
const PrivateRoute = ({ children, isLoggedIn }) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return children;
};

// Admin Layout
const AdminLayout = ({ children }) => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <div style={{ flexGrow: 1, marginTop: "70px" }}>
      <Header />
      {children}
    </div>
  </div>
);

// Main App Component
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <SepedaProvider>
        {/* Navbar and Routes */}
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          {/* Halaman Admin */}
          <Route path="/loginadmin" element={<Loginadmin />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/jenis-sepeda"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AdminLayout>
                  <JenisSepeda />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/transaksi"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AdminLayout>
                  <Transaksi />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/pengguna"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AdminLayout>
                  <Pengguna />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/TambahSepeda"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AdminLayout>
                  <TambahSepeda />
                </AdminLayout>
              </PrivateRoute>
            }
          />
          <Route
            path="/EditSepeda/:id"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <AdminLayout>
                  <EditSepeda />
                </AdminLayout>
              </PrivateRoute>
            }
          />

          {/* Halaman User */}
          <Route path="/beranda" element={<Beranda />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/lokasi" element={<Lokasi />} />
          <Route path="/daftarsepeda" element={<DaftarSepeda />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/sewa" element={<Sewa />} />
          <Route path="/rentalacc" element={<RentalAcc />} />
          <Route path="/transaksiuser" element={<TransaksiUser />} />
          <Route path="/kontakkami" element={<Kontak />} />
          <Route path="/konfirmasi" element={<Konfirmasi />} />
          <Route path="/profil" element={<AkunProfil />} />
          <Route path="/pembayaran" element={<Pembayaran />} />
        </Routes>
        <Footer />
      </SepedaProvider>
    </Router>
  );
};

export default App;
