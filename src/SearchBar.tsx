import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ({ children }: { children: ReactNode }) {
    const [url, setUrl] = useState("");
    const pathname = location.pathname.replace(/^\//, "");
    const navigate = useNavigate();

    window.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        navigate(-1);
    });

    const handleUrl = ({ children }: { children: ReactNode }) => {
        useEffect(() => setUrl(pathname), [location.pathname]);
        return children;
    };
    return (
        <>
            <div id="url">
                <button className="popstate" onClick={() => navigate(-1)}>
                    &lt;
                </button>
                <button className="popstate" onClick={() => navigate(+1)}>
                    &gt;
                </button>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        navigate(encodeURI(url));
                    }}
                >
                    <div id="search-bar-container">
                        <input
                            type="text"
                            name="url"
                            id="search-bar"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                        />
                        <button type="submit">Search</button>
                    </div>
                </form>
                <button
                    className="popstate"
                    onClick={() =>
                        fetch("https://mini-browser/off").catch(console.error)
                    }
                >
                    X
                </button>
            </div>
            {handleUrl({ children })}
        </>
    );
}
