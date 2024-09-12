import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SearchBar from "./SearchBar";
import { Eyefind, Eyefind404, EyefindHome } from "./pages/Eyefind/Eyefind";
import { Maze, MazeDeposit, MazeHome, MazeWithdraw } from "./pages/Maze/Maze";
import { Legendary, LegendaryHome } from "./pages/Legendary/Legendary";
import { Warstock, WarstockHome } from "./pages/Warstock/Warstock";

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
                        <Route path="deposit" element={<MazeDeposit />} />
                        <Route path="withdraw" element={<MazeWithdraw />} />
                    </Route>

                    <Route
                        path="www.legendarymotorsport.net"
                        element={<Legendary />}
                    >
                        <Route path="" element={<LegendaryHome />} />
                    </Route>

                    <Route
                        path="www.warstock-cache-and-carry.com"
                        element={<Warstock />}
                    >
                        <Route path="" element={<WarstockHome />} />
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
