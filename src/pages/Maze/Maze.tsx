import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Maze.webp";
import "./Maze.scss";
import { createContext, useContext, useState } from "react";

interface User {
    name: string;
    amount: number;
}

const context = createContext<User | null>(null);

export function Maze() {
    const [user, setUser] = useState<User | null>({ name: "User", amount: 0 });
    return (
        <context.Provider value={user}>
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
        </context.Provider>
    );
}

export function MazeHome() {
    const user = useContext(context);
    return (
        <div id="home">
            <div id="choices">
                <div id="choice">
                    {!user ? (
                        <Link to="open-account" className="red-button">
                            Open a bank account
                        </Link>
                    ) : (
                        <>
                            <Link to="deposit" className="red-button">
                                Deposit
                            </Link>
                            <Link to="withdraw" className="red-button">
                                Withdraw
                            </Link>
                            <Link to="logs" className="red-button">
                                Transaction Logs
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export function OpenAccount() {
    const user = useContext(context);
    if (user) return <>You already own a banking account</>;
    return <>loading</>;
}

export function MazeDeposit() {
    const user = useContext(context);
    if (!user) return <>You do not own any banking account</>;
    return <>Deposit Loading</>;
}

export function MazeWithdraw() {
    const user = useContext(context);
    if (!user) return <>You do not own any banking account</>;
    return <>Withdraw Loading</>;
}

export function Maze404() {
    return <>404</>;
}
