import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/main/About/About";
import CoinDetail from "./components/main/CoinDetail/CoinDetail";
import Coins from "./components/main/Coins/Coins";
import Contact from "./components/main/Contact/Contact";
import Home from "./components/main/Home/Home";
import NotFound from "./components/main/NotFound/NotFound";
import { getAuth } from "firebase/auth";
import app from "./firebase.init";
import SignUp from "./components/main/Signup/Signup";
import SignIn from "./components/main/SignIn/SignIn";
import ResetPassword from "./components/main/ResetPassword/ResetPassword";

const auth = getAuth(app);

function App() {
  return (
    <div className="overflow-x-hidden ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/coin-details/:id" element={<CoinDetail />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
