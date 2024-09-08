import { Link } from "react-router-dom";
import logo from "../assets/Eyefind.info.webp";
import mazelogo from "../assets/Maze.webp";
import "./Eyefind.scss";

export default function () {
    return (
        <>
            <header id="eyefind-header">
                <img src={logo} alt="eyefind logo" />
            </header>
            <main id="eyefind-main">
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
            </main>
        </>
    );
}
