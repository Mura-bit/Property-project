
import { Routes, Route } from "react-router-dom";
import NavBar from "./containers/navBar/NavBar.jsx";
import './App.css';
import FetchDog from "./pages/FetchDog.jsx";
import Counter from "./pages/Counter.jsx";

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/FetchDog" element={<FetchDog />}></Route>
        <Route path="/Counter" element={<Counter/>}></Route>
      </Routes>
    </>
  );
}

export default App;
