import { Outlet } from "react-router-dom";
import "./Legendary.scss";
import background from "../../assets/legendary.jpg";
import { MouseEvent, useState } from "react";

export function Legendary() {
    return (
        <>
            <div id="legendary-bar"></div>
            <img id="legendary-header" src={background} />
            <section id="cars-section">
                <Outlet />
            </section>
        </>
    );
}

export function LegendaryHome() {
    const buttons = ["FEATURED", "2 DOOR", "4 DOOR", "MOTORCYCLES", "SPECIAL"];

    const [activeButton, setActiveButton] = useState(buttons[0]);

    const handleClick = (button: string) => {
        setActiveButton(button);
    };

    return (
        <div id="cars">
            <div id="filters-ul">
                {buttons.map((button, i) => (
                    <li
                        key={i}
                        onClick={() => handleClick(button)}
                        className={activeButton === button ? "active" : ""}
                    >
                        {button}
                    </li>
                ))}
            </div>
        </div>
    );
}
