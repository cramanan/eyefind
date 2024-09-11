import "./App.scss";
import { debugData } from "../utils/debugData";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Eyefind, Eyefind404, EyefindHome } from "../pages/Eyefind/Eyefind";
import {
    Maze,
    Maze404,
    MazeDeposit,
    MazeHome,
    MazeWithdraw,
    OpenAccount,
} from "../pages/Maze/Maze";

// This will set the NUI to visible if we are
// developing in browser
debugData([
    {
        action: "setVisible",
        data: true,
    },
]);

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
                        <Route path="open-account" element={<OpenAccount />} />
                        <Route path="deposit" element={<MazeDeposit />} />
                        <Route path="withdraw" element={<MazeWithdraw />} />
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
