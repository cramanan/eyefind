import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ({ children }: { children: ReactNode }) {
    const [url, setUrl] = useState("");
    const navigate = useNavigate();

    const handleUrl = ({ children }: { children: ReactNode }) => {
        useEffect(
            () => setUrl(location.pathname.replace(/^\//, "")),
            [location.pathname]
        );
        return children;
    };
    return (
        <>
            <div id="url">
                <button onClick={() => navigate(-1)}>&lt;</button>
                <button onClick={() => navigate(+1)}>&gt;</button>

                <form
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
                </form>
            </div>
            {handleUrl({ children })}
        </>
    );
}
