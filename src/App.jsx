import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

const App = () => {
    useEffect(() => {
        // Устанавливаем заголовок страницы при загрузке компонента
        document.title = "Ya";
    }, []);
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
        </Router>
    );
};

export default App;
