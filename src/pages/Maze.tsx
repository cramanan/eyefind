import { Link, Outlet } from "react-router-dom";
import logo from "../assets/Maze.webp";
import "./Maze.scss";

export function Maze() {
    return (
        <div id="background">
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
        </div>
    );
}

export function MazeHome() {
    return (
        <div id="choice">
            <Link to="open-account" className="red-button">
                Open a bank account
            </Link>
        </div>
    );
}

export function OpenAccount() {
    return (
        <>
            <h2 id="open-account">Open a bank account</h2>
        </>
    );
}

export function Maze404() {
    return <>404</>;
}
