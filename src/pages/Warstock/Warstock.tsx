import { Outlet } from "react-router-dom";
import background from "../../assets/bg_warstock.jpeg";
import "./Warstock.scss";

export function Warstock() {
    return (
        <>
            <img src={background} id="warstock-background" />
            <Outlet />
        </>
    );
}

export function WarstockHome() {
    return (
        <div id="warstock-bar">
            <div id="stocks">EXCLUSIVE STOCKS</div>
        </div>
    );
}
