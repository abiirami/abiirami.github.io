import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import SideNav from "../components/SideNav";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <main className="about-page">

      <SideNav />

      <section className="about-container">

        <h1 className="about-title">
          ✦ About Me ✦
        </h1>


        <div className="about-photo">

          <img
            src="/images/about-me.jpg"
            alt="insert image"
          />

        </div>


        <div className="about-socials">

          <a
            href="https://www.linkedin.com/in/abirami-patchaiyappan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>


          <a
            href="mailto:abiramipatchai@gmail.com"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>

        </div>



        <div className="about-card">

          <h2>
            Hi, I'm Abi!
          </h2>


          <h3>
            Software Engineer • Artist • Human
          </h3>


          <p>
            I love making things, whether that's exciting software,
            intuitive user experiences, fun little videos, or art in
            just about any medium. I graduated in 2022 with a dual
            degree in Computer Science and Cognitive Science, and I'm
            always excited by projects that blend creativity,
            technology, and a little curiosity.
          </p>

        </div>




        <div className="about-card">

          <h3>
            Work History
          </h3>


          <div className="timeline">


            <div className="timeline-item">

              <h4>
                Full Stack Software Engineer
              </h4>


              <span>
                Amazon • 2022–2026
              </span>


              <p>
                <li>
                  Worked on internal tooling to manage AWS launches
                </li>

                <li>
                  Worked on AWS Gen AI products such as Bedrock,
                  Rekognition, Textract...
                </li>
              </p>

            </div>




            <div className="timeline-item">

              <h4>
                Software Engineering Intern
              </h4>


              <span>
                2019, 2020, 2021
              </span>


              <p>
                Interned at Kaiser Permanente, Hewlett Packard
                Enterprise, and Amazon.
              </p>

            </div>





            <div className="timeline-item">

              <h4>
                Undergraduate Research
              </h4>


              <span>
                UC Santa Cruz • 2021
              </span>


              <p>
                Worked at{" "}
                <a href="https://samahalab.ucsc.edu/">
                  Samaha Lab
                </a>{" "}
                as an undergraduate research assistant using
                computational modeling to study cognition.
              </p>

            </div>


          </div>


        </div>




        <div className="about-footer">

          <h3>
            Thanks for stopping by ♡
          </h3>


          <p>
            Feel free to wander around my little corner of the
            internet by clicking the nav in the top left.
            (P.S. The home page is my favorite!)
          </p>

        </div>


      </section>

    </main>
  );
}