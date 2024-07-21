import "./App.css";
import Easy from './components/easy'
import Medium from "./components/MEDIUM/Medium";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Movie from "./components/MEDIUM/Movie";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Easy />} />
        <Route path="medium" element={<Medium />} />
        <Route path="medium/:id" element={<Movie />} />
        {/* <Route path="hard" element={<Hard />} /> */}
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
