import { Route, Routes, Navigate } from "react-router-dom";
import "./App.scss";
import { Eyefind, Eyefind404, EyefindHome } from "./pages/Eyefind";
import { Maze, Maze404, MazeHome, OpenAccount } from "./pages/Maze";
import SearchBar from "./SearchBar";

function App() {
    return (
        <SearchBar>
            <Routes>
                <Route path="/www.eyefind.info/" element={<Eyefind />}>
                    <Route path="" element={<EyefindHome />} />
                    <Route path="*" element={<Eyefind404 />} />
                </Route>
                <Route path="/www.maze-bank.com/" element={<Maze />}>
                    <Route path="open-account" element={<OpenAccount />} />
                    <Route path="" element={<MazeHome />} />
                    <Route path="*" element={<Maze404 />} />
                </Route>
                <Route
                    path="index.html"
                    element={<Navigate to="/www.eyefind.info/" replace />}
                />
                <Route
                    path="/"
                    element={<Navigate to="/www.eyefind.info/" replace />}
                />
                <Route path="*" element={<Eyefind />}>
                    <Route path="*" element={<Eyefind404 />} />
                </Route>
            </Routes>
        </SearchBar>
    );
}

export default App;
