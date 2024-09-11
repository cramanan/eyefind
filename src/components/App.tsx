import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Eyefind, Eyefind404, EyefindHome } from "../pages/Eyefind/Eyefind";
import {
    Maze,
    Maze404,
    MazeDetails,
    MazeHome,
    MazeOpen,
} from "../pages/Maze/Maze";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SearchBar />}>
                    {/* REDIRECTS */}
                    <Route
                        path="index.html"
                        element={<Navigate to="/www.eyefind.info" replace />}
                    />

                    <Route
                        path=""
                        element={<Navigate to="/www.eyefind.info" replace />}
                    />

                    {/* ROUTES */}
                    <Route path="www.eyefind.info" element={<Eyefind />}>
                        <Route path="" element={<EyefindHome />} />
                        <Route path="*" element={<Eyefind404 />} />
                    </Route>
                    <Route path="www.maze-bank.com" element={<Maze />}>
                        <Route path="" element={<MazeHome />} />
                        <Route path="account-open" element={<MazeOpen />} />
                        <Route
                            path="account-details"
                            element={<MazeDetails />}
                        />

                        <Route path="logs" element={<>logs</>} />
                        <Route path="*" element={<Maze404 />} />
                    </Route>

                    <Route path="*" element={<Eyefind />}>
                        <Route path="*" element={<Eyefind404 />} />
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
