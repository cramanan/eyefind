import { Link } from "react-router-dom";
import logo from "../assets/Eyefind.info.webp";
import "./Eyefind.scss";

export default function () {
    return (
        <>
            <header id="eyefind-header">
                <img src={logo} alt="" />
            </header>
            <main>
                <div id="ads">
                    <Link to="/www.maze-bank.com/">Go to Maze</Link>
                </div>
            </main>
        </>
    );
}
