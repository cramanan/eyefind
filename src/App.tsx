import { Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Eyefind from "./pages/Eyefind";
import Maze from "./pages/Maze";
import SearchBar from "./SearchBar";
import _404 from "./pages/404";

function App() {
    return (
        <SearchBar>
            <Routes>
                <Route path="/www.eyefind.info/">
                    <Route path="" element={<Eyefind />} />
                    <Route path="*" element={<_404 />} />
                </Route>
                <Route path="/www.maze-bank.com/">
                    <Route path="" element={<Maze />} />
                    <Route path="*" element={<_404 />} />
                </Route>
                <Route
                    path="/"
                    element={<Navigate to="/www.eyefind.info/" replace />}
                />
                <Route path="*" element={<_404 />} />
            </Routes>
        </SearchBar>
    );
}

export default App;
