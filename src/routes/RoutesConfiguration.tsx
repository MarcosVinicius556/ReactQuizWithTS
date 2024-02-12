//React Router DOM
import { Routes, Route } from "react-router-dom";

//Pages
import Home from "../pages/Home";
import Questions from "../pages/Questions";

export default function RoutesConfiguration() {
    return (
        <Routes>
            <Route element={<Home />} path="/"/>
            <Route element={<Questions />} path="/questions"/>
            <Route element={<Home />} path="*"/>
        </Routes>
    )
}