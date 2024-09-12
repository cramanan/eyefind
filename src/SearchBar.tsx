import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function () {
    const [url, setUrl] = useState("");

    const pathname = `${location.pathname.substring(1)}${location.search}`;
    const navigate = useNavigate();

    useEffect(() => setUrl(pathname), [location.pathname]);

    return (
        <>
            <div id="url">
                <button className="popstate" onClick={() => navigate(-1)}>
                    &lt;
                </button>
                <button className="popstate" onClick={() => navigate(1)}>
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
                        autoComplete="off"
                    />
                </form>
                <button
                    className="popstate"
                    onClick={() => navigate("/www.eyefind.info")}
                >
                    H
                </button>
                <button className="popstate" id="quit">
                    X
                </button>
            </div>
            <main id="url-main">
                <Outlet />
            </main>
        </>
    );
}
