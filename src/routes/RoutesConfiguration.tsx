//React Router DOM
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Questions from "../pages/Questions";
import Preview from "../pages/Preview";

export default function RoutesConfiguration() {
    return (
        <Routes>
            <Route element={<Home />} path="/"/>
            <Route element={<Preview />} path="/preview"/>
            <Route element={<Questions />} path="/questions"/>
            <Route element={<Home />} path="*"/>
        </Routes>
    )
}