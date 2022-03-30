import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />
      <Routes>{/* <Route path="/" element={<}></Route> */}</Routes>
    </div>
  );
}

export default App;
