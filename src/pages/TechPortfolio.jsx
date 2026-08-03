import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiDevpost } from "react-icons/si";
import SideNav from "../components/SideNav";
import "./TechPortfolio.css";

export default function TechPortfolio() {

    const [projects, setProjects] = useState([]);

    useEffect(() => {

        fetch("/tech_projects.json")
            .then(res => res.json())
            .then(data => setProjects(data));

    }, []);

    return (

        <main className="tech-page">

            <SideNav />

            <section className="tech-container">

                <header className="tech-header">
                    <h1> ・ﾟ✧ </h1>
                    <h1>
                        Tech Portfolio
                    </h1>
                    <h1>✧・ﾟ</h1>

                    <div className="tech-links">

                        <a
                            href="https://www.linkedin.com/in/abirami-patchaiyappan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://github.com/abiirami"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://devpost.com/abiirami"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Devpost"
                        >
                            <SiDevpost />
                        </a>

                    </div>

                    <p>
                        things I've built over the years
                    </p>

                </header>

                <div className="project-grid">

                    {projects.map((project, index) => (

                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                        >

                            <div className="project-image">

                                <img
                                    src={project.image}
                                    alt={project.title}
                                />

                            </div>

                            <div className="project-info">

                                <h2>
                                    {project.title}
                                </h2>

                                <p>
                                    {project.description}
                                </p>

                            </div>

                        </a>

                    ))}

                </div>

            </section>

        </main>

    );

}