import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Eyefind.info.webp";
import mazelogo from "../../assets/Maze.webp";
import "./Eyefind.scss";

export function Eyefind() {
    document.title = "Eyefind";

    return (
        <>
            <header id="eyefind-header">
                <header id="eyefind-header-container">
                    <Link to="/www.eyefind.info">
                        <img src={logo} alt="eyefind logo" />
                    </Link>
                </header>
            </header>
            <div id="sep"></div>
            <div id="links">
                <Link to="media">
                    <span>MEDIA AND ENTERTAINEMENT</span>
                </Link>
                <Link to="food">
                    <span>FOOD AND DRINK</span>
                </Link>
                <Link to="money">
                    <span>MONEY AND SERVICES</span>
                </Link>
                <Link to="travel">
                    <span>TRAVEL AND TRANSPORTS</span>
                </Link>
                <Link to="fashion">
                    <span>FASHION AND HEALTH</span>
                </Link>
            </div>
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
