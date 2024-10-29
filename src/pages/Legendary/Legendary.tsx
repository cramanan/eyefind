import { Outlet } from "react-router-dom";
import background from "../../assets/legendary.jpg";
import { useState } from "react";

export function Legendary() {
    return (
        <>
            <div className="h-3 bg-[#75080a]"></div>
            <img className="w-full align-middle" src={background} />
            <section className="w-full h-full flex items-center flex-col bg-legendary-pattern border-t-[6px] border-[#a60b0a] bg-[#7c0304]">
                <Outlet />
            </section>
        </>
    );
}

export function LegendaryHome() {
    const buttons = ["FEATURED", "2 DOOR", "4 DOOR", "MOTORCYCLES", "SPECIAL"];

    const [activeButton, setActiveButton] = useState(buttons[0]);

    const handleClick = (button: string) => setActiveButton(button);

    return (
        <div className="h-full w-4/5 bg-[#200] -mt-20 p-3 border-4 border-[#840000]">
            <div
                id="filters-ul"
                className="h-[70px] flex items-center justify-evenly list-none"
            >
                {buttons.map((button, i) => (
                    <li
                        key={i}
                        onClick={() => handleClick(button)}
                        className={`h-full w-full flex justify-center items-center m-1 cursor-pointer rounded-md text-[22px] ${
                            button === activeButton
                                ? "bg-white text-black"
                                : "bg-[#a00000] text-white"
                        } `}
                    >
                        {button}
                    </li>
                ))}
            </div>
        </div>
    );
}
