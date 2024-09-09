import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Maze.webp";
import "./Maze.scss";

export function Maze() {
    return (
        <main id="background">
            <span id="bar"></span>
            <div id="container">
                <Link to="">
                    <img src={logo} alt="Maze Bank Logo" id="logo" />
                </Link>
                <span id="sep"></span>
                <div id="outlet">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export function MazeHome() {
    return (
        <div className="choice">
            <Link to="open-account">Open a bank account</Link>
        </div>
    );
}

export function OpenAccount() {
    return <>Open a bank account</>;
}

export function Maze404() {
    return <>404</>;
}
