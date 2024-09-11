import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/Maze.webp";
import "./Maze.scss";
import { createContext, useContext, useEffect, useState } from "react";

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
    document.title = "Maze Bank of Los Santos";

    const fetchUser = () => {};

    useEffect(fetchUser, []);

    return (
        <context.Provider value={{ user, setUser }}>
            <div id="background">
                <span id="bar"></span>
                <div id="container">
                    <div id="logo-container">
                        <Link to="">
                            <img src={logo} alt="Maze Bank Logo" id="logo" />
                        </Link>
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
    const { user } = useContext(context);
    return (
        <div id="home">
            <div id="choices">
                <div id="choice">
                    {!user ? (
                        <Link to="account-open" className="red-button">
                            Open a bank account
                        </Link>
                    ) : (
                        <>
                            <Link to="account-details" className="red-button">
                                Account details
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

export function MazeOpen() {
    const { user, setUser } = useContext(context);
    const [loading, setLoading] = useState(true);

    const createAccount = () => {
        setTimeout(() => {
            setLoading(false);
            setUser({ identifier: "identifier", balance: 0 });
        }, 2000);
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

export function Maze404() {
    return <>404</>;
}

export function MazeDetails() {
    return <>account details</>;
}
