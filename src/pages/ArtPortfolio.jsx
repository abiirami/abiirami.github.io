import { useEffect, useState } from "react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import SideNav from "../components/SideNav";
import "./ArtPortfolio.css";

const categories = [
    "All",
    "Character",
    "Backgrounds",
    "Animation",
    "Paintings"
];


export default function ArtPortfolio() {

    const [art, setArt] = useState([]);

    const [activeCategory, setActiveCategory] = useState("All");

    const [selectedArt, setSelectedArt] = useState(null);


    useEffect(() => {

        fetch(`${import.meta.env.BASE_URL}art_projects.json`)
            .then(res => res.json())
            .then(data => setArt(data));

    }, []);



    const filteredArt =
        activeCategory === "All"
            ? art
            : art.filter(piece =>
                piece.tags.includes(activeCategory)
            );



    return (

        <main className="art-page">

            <SideNav />


            <section className="art-container">


                <header className="art-header">

                    <h1>
                        *˚ Art Portfolio ˚*
                    </h1>


                    <div className="art-socials">

                        <a
                            href="https://instagram.com/maybeitdraws"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>


                        <a
                            href="https://www.tiktok.com/@3frogsdeep"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="TikTok"
                        >
                            <FaTiktok />
                        </a>

                    </div>


                    <div className="art-filters">

                        {
                            categories.map(category => (

                                <button
                                    key={category}
                                    className={
                                        activeCategory === category
                                            ? "active"
                                            : ""
                                    }
                                    onClick={() =>
                                        setActiveCategory(category)
                                    }
                                >

                                    {category}

                                </button>

                            ))
                        }

                    </div>


                </header>




                <div className="art-grid">

                    {
                        filteredArt.map((piece,index)=>(

                            <article
                                key={index}
                                className="art-piece"
                                onClick={() =>
                                    setSelectedArt(piece)
                                }
                            >

                                {
                                    piece.type === "video"
                                    ?

                                    <video
                                        src={`${import.meta.env.BASE_URL}${piece.src.replace(/^\//, "")}`}
                                        poster={
                                            piece.thumbnail
                                                ? `${import.meta.env.BASE_URL}${piece.thumbnail.replace(/^\//, "")}`
                                                : undefined
                                        }
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata"
                                    />

                                    :

                                    <img
                                        src={`${import.meta.env.BASE_URL}${piece.src.replace(/^\//, "")}`}
                                        alt={piece.title}
                                    />

                                }


                            </article>

                        ))
                    }

                </div>


            </section>




            {
                selectedArt && (

                    <div
                        className="art-modal"
                        onClick={() =>
                            setSelectedArt(null)
                        }
                    >

                        <div
                            className="modal-content"
                            onClick={e =>
                                e.stopPropagation()
                            }
                        >

                            {
                                selectedArt.type === "video"
                                ?

                                <video
                                    src={`${import.meta.env.BASE_URL}${selectedArt.src.replace(/^\//, "")}`}
                                    poster={
                                        selectedArt.thumbnail
                                            ? `${import.meta.env.BASE_URL}${selectedArt.thumbnail.replace(/^\//, "")}`
                                            : undefined
                                    }
                                    controls
                                    loop
                                />

                                :

                                <img
                                    src={`${import.meta.env.BASE_URL}${selectedArt.src.replace(/^\//, "")}`}
                                    alt={selectedArt.title}
                                />

                            }


                            <h2>
                                {selectedArt.title}
                            </h2>


                            <p>
                                {selectedArt.description}
                            </p>


                        </div>


                    </div>

                )
            }


        </main>

    );

}