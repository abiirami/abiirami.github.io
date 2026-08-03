import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./SideNav.css";


export default function SideNav() {

    const [open, setOpen] = useState(false);


    const links = [
        {
            to: "/",
            icon: "🏠",
            text: "Home"
        },
        {
            to: "/about_me",
            icon: "🌿",
            text: "About Me"
        },
        {
            to: "/tech_portfolio",
            icon: "💻",
            text: "Tech Portfolio"
        },
        {
            to: "/art_portfolio",
            icon: "🎨",
            text: "Art Portfolio"
        }
    ];


    return (
        <>

            <button
                className="menu-button"
                onClick={() => setOpen(true)}
            >
                ☰
            </button>


            {open && (
                <div
                    className="menu-overlay"
                    onClick={() => setOpen(false)}
                />
            )}


            <aside
                className={
                    open
                        ? "side-panel open"
                        : "side-panel"
                }
            >

                <button
                    className="close-button"
                    onClick={() => setOpen(false)}
                >
                    ✕
                </button>


                <h2>
                    Explore ✨
                </h2>


                <nav>

                    {links.map(link => (

                        <NavLink
                            key={link.to}
                            to={link.to}
                            onClick={() => setOpen(false)}
                        >

                            <span>
                                {link.icon}
                            </span>

                            {link.text}

                        </NavLink>

                    ))}

                </nav>
                <footer className="side-footer">
                    <p>
                        © 2026 ~ built with ❤️ and a vision
                    </p>
                </footer>
            </aside>

        </>
    );
}