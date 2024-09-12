import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Maze.webp";
import "./Maze.scss";
import { createContext, useContext, useEffect, useState } from "react";

interface User {
    name: string;
    balance: number;
    setBalance: (n: number) => void;
}

const context = createContext<User>({
    name: "Michael",
    balance: 0,
    setBalance: console.log,
});

export function Maze() {
    document.title = "Maze Bank of Los Santos";
    const name = "Michael";
    const [balance, setBalance] = useState(457_768);

    return (
        <context.Provider value={{ name, balance, setBalance }}>
            <div id="background">
                <span id="bar"></span>
                <div id="container">
                    <div id="logo-container">
                        <Link to="">
                            <img src={logo} alt="Maze Bank Logo" id="logo" />
                        </Link>
                        <div id="balance">
                            Account balance: $
                            {new Intl.NumberFormat("en-US").format(balance)}
                        </div>
                    </div>
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
    return (
        <div id="home">
            <div id="choices">
                <div id="choice">
                    <Link to="deposit" className="red-button">
                        Deposit
                    </Link>
                    <Link to="withdraw" className="red-button">
                        Withdraw
                    </Link>

                    <Link to="logs" className="red-button">
                        Transaction Logs
                    </Link>
                </div>
            </div>
        </div>
    );
}

export function MazeDeposit() {
    return <>Deposit</>;
}

export function MazeWithdraw() {
    return <>Withdraw</>;
}
