import "./App.css";
import Lending from "./pages/lending/Lending";
import Main from "./pages/MainPage/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="HTML_example" element={<Lending />} />
    </Routes>
  );
}

export default App;
