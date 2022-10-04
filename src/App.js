import "./App.css";
import Projects from "./pages/Projects/Projects";
import AboutMe from "./pages/AboutMe/AboutMe";
import Games from "./pages/Games/Games";
import Contacts from "./pages/Contacts/Contacts";
import Main from "./pages/MainPage/Main";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="projects" element={<Projects />} />
      <Route path="aboutMe" element={<AboutMe />} />
      <Route path="games" element={<Games />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
