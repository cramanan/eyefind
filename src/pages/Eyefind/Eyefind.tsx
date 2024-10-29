import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Eyefind.info.webp";
import mazelogo from "../../assets/Maze.webp";
import legendarylogo from "../../assets/LegendaryMotorsport-GTAV-Logo.webp";
import warstocklogo from "../../assets/warstock-logo.png";

const links = [
    "MEDIA AND ENTERTAINEMENT",
    "FOOD AND DRINK",
    "MONEY AND SERVICES",
    "TRAVEL AND TRANSPORTS",
    "FASHION AND HEALTH",
];

const toUrl = (s: string) => s.split(" ")[0].toLowerCase();

export function Eyefind() {
    document.title = "Eyefind";

    return (
        <>
            <header className="flex justify-center items-center h-60 bg-[#498bc2]">
                <div className="w-[70%]">
                    <Link to="/www.eyefind.info">
                        <img src={logo} alt="eyefind logo" />
                    </Link>
                </div>
            </header>
            <div className="h-3 bg-[#ffbe00]"></div>
            <div className="flex justify-evenly py-0 px-[20%] bg-[#efefef] h-[50px] border border-b-2 border-[#d0d0d0]">
                {links.map((link, idx) => (
                    <Link
                        key={idx}
                        to={toUrl(link)}
                        className="w-full h-full flex items-center justify-center [:not(:last-child)]:border border-[#d0d0d0] border-r-2"
                    >
                        {link}
                    </Link>
                ))}
            </div>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export function EyefindHome() {
    return (
        <div id="sites" className="w-fit flex gap-14 mx-auto my-12">
            <Link to="/www.maze-bank.com">
                <img src={mazelogo} alt="go to maze bank website" />
            </Link>
            <Link to="/www.legendarymotorsport.net">
                <img
                    src={legendarylogo}
                    alt="go to legendary motorsport website"
                />
            </Link>
            <Link to="/www.warstock-cache-and-carry.com">
                <img
                    src={warstocklogo}
                    alt="go to www.warstock cache & carry website"
                />
            </Link>
        </div>
    );
}

export function Eyefind404() {
    return <div id="sites">404 X(</div>;
}
