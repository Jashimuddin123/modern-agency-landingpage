import { Route, Routes } from "react-router-dom";
import './App.css';
import Layout from './Layout/Layout';
// import About from './Components/About/About';
import Home from './Components/Home/Home';
import About from "./Components/About/About";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
