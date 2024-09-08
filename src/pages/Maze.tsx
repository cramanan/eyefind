import logo from "../assets/Maze.webp";
import "./Maze.scss";

export default function () {
    return (
        <main id="background">
            <span id="bar"></span>
            <div id="container">
                <img src={logo} alt="Maze Bank Logo" id="logo" />
                <span id="sep"></span>
                <div>Hello</div>
            </div>
        </main>
    );
}
