import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Maze.webp";
import { createContext, useState } from "react";

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
        <div className="bg-maze-pattern bg-[0_-30px] h-full flex flex-col items-center">
            <span className="h-4 w-full bg-[#c51d26] "></span>
            <div className="flex flex-col p-[50px] h-full w-4/5 bg-[#e8e8e8]">
                <div className="flex items-baseline justify-between">
                    <Link to="">
                        <img src={logo} alt="Maze Bank Logo" id="logo" />
                    </Link>
                    <div id="balance">
                        Account balance: $
                        {new Intl.NumberFormat("en-US").format(balance)}
                    </div>
                </div>
                <div className="w-full h-3 bg-[#e8252e]"></div>
                <div className="w-full h-full">
                    <context.Provider value={{ name, balance, setBalance }}>
                        <Outlet />
                    </context.Provider>
                </div>
            </div>
        </div>
    );
}

export function MazeHome() {
    return (
        <div
            id="choices"
            className="flex items-center justify-center h-full flex-col"
        >
            <div className="w-fit flex flex-col items-center justify-evenly">
                <Link
                    to="deposit"
                    className="w-full m-5 py-5 px-12 bg-[#e8252e] border-[3px] border-black rounded-xl text-xl text-center text-white"
                >
                    Deposit
                </Link>
                <Link
                    to="withdraw"
                    className="w-full m-5 py-5 px-12 bg-[#e8252e] border-[3px] border-black rounded-xl text-xl text-center text-white"
                >
                    Withdraw
                </Link>
                <Link
                    to="logs"
                    className="w-full m-5 py-5 px-12 bg-[#e8252e] border-[3px] border-black rounded-xl text-xl text-center text-white"
                >
                    Transaction Logs
                </Link>
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

export function MazeLogs() {
    return <>Withdraw</>;
}
