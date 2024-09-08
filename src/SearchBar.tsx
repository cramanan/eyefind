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
            <form
                id="url"
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

            {handleUrl({ children })}
        </>
    );
}
