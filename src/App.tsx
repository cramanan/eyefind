import { Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import Eyefind from "./pages/Eyefind";
import { Maze, Home, OpenAccount } from "./pages/Maze";
import SearchBar from "./SearchBar";

function App() {
    return (
        <SearchBar>
            <Routes>
                <Route path="/www.eyefind.info/">
                    <Route path="" element={<Eyefind />} />
                    <Route path="*" element={<>404</>} />
                </Route>
                <Route path="/www.maze-bank.com/" element={<Maze />}>
                    <Route path="open-account" element={<OpenAccount />} />
                    <Route path="" element={<Home />} />
                </Route>
                <Route
                    path="index.html"
                    element={<Navigate to="/www.eyefind.info/" replace />}
                />
                <Route
                    path="/"
                    element={<Navigate to="/www.eyefind.info/" replace />}
                />
                <Route path="*" element={<>404</>} />
            </Routes>
        </SearchBar>
    );
}

export default App;
