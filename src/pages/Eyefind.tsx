import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Eyefind.info.webp";
import mazelogo from "../assets/Maze.webp";
import "./Eyefind.scss";

export function Eyefind() {
    return (
        <>
            <header id="eyefind-header">
                <img src={logo} alt="eyefind logo" />
            </header>
            <main id="eyefind-main">
                <Outlet />
            </main>
        </>
    );
}

export function EyefindHome() {
    return (
        <div id="sites">
            <Link to="/www.maze-bank.com">
                <img src={mazelogo} alt="go to maze bank website" />
            </Link>
            <Link to="/www.maze-bank.com">
                <img src={mazelogo} alt="go to maze bank website" />
            </Link>
            <Link to="/www.maze-bank.com">
                <img src={mazelogo} alt="go to maze bank website" />
            </Link>
        </div>
    );
}

export function Eyefind404() {
    return <div id="sites">404 X(</div>;
}
