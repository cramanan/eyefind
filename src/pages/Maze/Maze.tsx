import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Maze.webp";
import "./Maze.scss";
import { createContext, useContext, useEffect, useState } from "react";
import { fetchNui } from "../../utils/fetchNui";

interface User {
    identifier: string;
    balance: number;
}

interface Initial {
    user: User | null;
    setUser: (u: User | null) => void;
}

const context = createContext<Initial>({ user: null, setUser: console.log });

export function Maze() {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const fetchUser = () => {
        fetchNui<User | null>("auth", null, null)
            .then((user) => {
                setUser(user);
                setLoading(false);
            })
            .catch(console.error);
    };

    useEffect(fetchUser, []);

    return (
        <context.Provider value={{ user, setUser }}>
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
    const { user } = useContext(context);
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
    const { user, setUser } = useContext(context);
    const [loading, setLoading] = useState(true);

    const createAccount = () => {
        fetchNui<User | null>("create", null, {
            identifier: "fivem:identifier",
            balance: 5000,
        })
            .then((user) =>
                setTimeout(() => {
                    setLoading(false);
                    setUser(user);
                }, 2000)
            )
            .catch(console.error);
    };

    if (user && loading)
        return (
            <div id="choices">
                <div id="choice">
                    <span>You already own a bank account</span>
                    <Link to="/www.maze-bank.com" className="red-button">
                        Back to menu
                    </Link>
                </div>
            </div>
        );

    createAccount();

    if (loading)
        return (
            <div id="choices">
                <div id="choice">Creating account...</div>
            </div>
        );

    if (user)
        return (
            <div id="choices">
                <div id="choice">
                    <span>Account created successfully</span>
                    <Link to="/www.maze-bank.com" className="red-button">
                        Back to menu
                    </Link>
                </div>
            </div>
        );
}
export function MazeDeposit() {
    const user = useContext(context);
    if (!user) return <>You do not own any bank account</>;
    return <>Deposit Loading</>;
}

export function MazeWithdraw() {
    const user = useContext(context);
    if (!user) return <>You do not own any bank account</>;
    return <>Withdraw Loading</>;
}

export function Maze404() {
    return <>404</>;
}
