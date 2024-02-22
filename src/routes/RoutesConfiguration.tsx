//React Router DOM
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import Preview from "../pages/Preview";
import EndGame from "../pages/EndGame";

export default function RoutesConfiguration() {
    return (
        <Routes>
            <Route element={<Home />} path="/"/>
            <Route element={<Preview />} path="/preview"/>
            <Route element={<Questions />} path="/questions"/>
            <Route element={<EndGame />} path="/endGame" />
            <Route element={<Home />} path="*"/>
        </Routes>
    )
}