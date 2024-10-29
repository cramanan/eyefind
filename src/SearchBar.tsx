import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function () {
    const [url, setUrl] = useState("");

    const pathname = `${location.pathname.substring(1)}${location.search}`;
    const navigate = useNavigate();

    const buttons = [
        {
            navigation: -1,
            d: "M315.38 3.95 7.71 241.08a19.186 19.186 0 0 0-3.76 3.67c-6.39 8.29-4.87 20.21 3.42 26.6L314.21 507.8c3.37 3.06 7.85 4.93 12.76 4.93 10.51 0 19.03-8.52 19.03-19.03V18.96h-.06c0-4.05-1.29-8.14-3.96-11.59-6.4-8.29-18.31-9.81-26.6-3.42z",
        },
        {
            navigation: +1,
            d: "M338.31 241.09 30.62 3.95c-8.29-6.39-20.2-4.87-26.6 3.42A18.905 18.905 0 0 0 .06 18.96H0v474.77c0 10.51 8.52 19.03 19.03 19.03 4.91 0 9.39-1.87 12.77-4.93l306.85-236.46c8.29-6.4 9.81-18.32 3.41-26.6-1.1-1.43-2.36-2.66-3.75-3.68z",
        },
    ];

    useEffect(() => setUrl(pathname), [location.pathname]);

    return (
        <>
            <div className="w-full flex fixed justify-center items-center z-10 bg-[#d3d3d8] h-10 ">
                <div className="flex  p-1 gap-1 border border-[#505054] rounded-xl overflow-hidden">
                    {buttons.map((elt, idx) => (
                        <button
                            className="p-1"
                            key={idx}
                            onClick={() => navigate(elt.navigation)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                shape-rendering="geometricPrecision"
                                text-rendering="geometricPrecision"
                                image-rendering="optimizeQuality"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                viewBox="0 0 346.02 512.76"
                                fill="#505054"
                                width={10}
                            >
                                <path fill-rule="nonzero" d={elt.d} />
                            </svg>
                        </button>
                    ))}
                </div>

                <button onClick={() => navigate("/www.eyefind.info")}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#505054"
                        width={24}
                    >
                        <path d="M20 20C20 20.5523 19.5523 21 19 21H5C4.44772 21 4 20.5523 4 20V11L1 11L11.3273 1.6115C11.7087 1.26475 12.2913 1.26475 12.6727 1.6115L23 11L20 11V20ZM11 13V19H13V13H11Z"></path>
                    </svg>
                </button>
                <div className="flex rounded-lg border border-[#505054] overflow-hidden">
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
                            className="w-[600px] text-xl outline-none px-1"
                            value={url}
                            onChange={(e) => setUrl(e.target.value)}
                            autoComplete="off"
                        />
                    </form>
                    <button className="px-2 font-bold">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            width={20}
                        >
                            <path d="M10.5859 12L2.79297 4.20706L4.20718 2.79285L12.0001 10.5857L19.793 2.79285L21.2072 4.20706L13.4143 12L21.2072 19.7928L19.793 21.2071L12.0001 13.4142L4.20718 21.2071L2.79297 19.7928L10.5859 12Z"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <main className="pt-10 h-[calc(100dvh-40px)]">
                <Outlet />
            </main>
        </>
    );
}
