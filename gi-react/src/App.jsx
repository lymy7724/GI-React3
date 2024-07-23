import "./App.css";
import Easy from './components/easy'
import Medium from "./components/MEDIUM/Medium";
import Hard from './components/Hard/Hard';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Movie from "./components/MEDIUM/Movie";
import Task from "./components/Hard/Task";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Easy />} />
        <Route path="medium" element={<Medium />} />
        <Route path="medium/:id" element={<Movie />} />
        <Route path="hard" element={<Hard />} />
        <Route path="detailed" element={<Task />} />

      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
