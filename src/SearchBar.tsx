import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function () {
    const [url, setUrl] = useState("");
    const pathname = location.pathname.substring(1);
    const navigate = useNavigate();

    // window.addEventListener("contextmenu", (e) => {
    //     e.preventDefault();
    //     navigate(-1);
    // });

    useEffect(() => setUrl(pathname), [location.pathname]);

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
                        if (pathname !== url) navigate(encodeURI(url));
                    }}
                >
                    <input
                        type="text"
                        name="url"
                        id="search-bar"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </form>
                <button
                    className="popstate"
                    id="quit"
                    onClick={() =>
                        fetch("https://mini-browser/off").catch(console.error)
                    }
                >
                    X
                </button>
            </div>
            <main id="url-main">
                <Outlet />
            </main>
        </>
    );
}
