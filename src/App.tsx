import { Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Restaurants from "@/pages/Restaurants";
import Profile from "@/pages/Profile";
import { Toaster } from "@/components/ui/sonner";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/restaurants/:id" element={<Restaurants />} />
      </Routes>
      <Toaster richColors position="top-center" />
    </>
  );
};

export default App;
