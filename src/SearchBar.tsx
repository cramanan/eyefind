import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ({ children }: { children: ReactNode }) {
    const [url, setUrl] = useState("");
    const pathname = location.pathname.replace(/^\//, "");
    const navigate = useNavigate();

    // window.addEventListener("contextmenu", (e) => {
    //     e.preventDefault();
    //     navigate(-1);
    // });

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
                    id="search-bar-form"
                    onSubmit={(e) => {
                        e.preventDefault();
                        navigate(encodeURI(url));
                    }}
                >
                    <input
                        type="text"
                        name="url"
                        id="search-bar"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                    <button
                        className="popstate"
                        id="quit"
                        onClick={() =>
                            fetch("https://mini-browser/off").catch(
                                console.error
                            )
                        }
                    >
                        X
                    </button>
                </form>
            </div>
            <main id="url-main">{handleUrl({ children })}</main>
        </>
    );
}
