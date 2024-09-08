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
            </div>
            <div id="container">
                <Outlet />
            </div>
        </main>
    );
}

export function Home() {
    return (
        <>
            <Link to="open-account">Open a bank account</Link>
        </>
    );
}

export function OpenAccount() {
    return <>Open a bank account</>;
}
