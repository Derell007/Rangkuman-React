import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <body>
        <section className="summary-container">
          <img src="/logo_html.svg" alt="HTML Logo" className="summary-logo" />
          <div className="summary-text">
            <h1>
              HTML <span>Article</span> Summary
            </h1>
            <p>
              Source by :{" "}
              <a
                style={{ color: "white" }}
                href="https://www.youtube.com/@sandhikagalihWPU"
                className="link-source"
              >
                Youtube channel Web Programming UNPAS
              </a>
            </p>
            <div className="summary-buttons">
              <Link to="/article" className="article-btn">
                Article's
              </Link>
              <a
                href="https://github.com/gallant4649/Rangkuman"
                className="article-btn"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </body>
    </>
  );
}

export default Home;
