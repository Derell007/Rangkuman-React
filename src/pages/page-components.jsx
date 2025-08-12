import React from "react";
import "../components/style.css";
import Sidebar from "../components/sidebar";

function Pages(props) {
  return (
    <body>
      <center>
        <div className="container">
          <div className="main-content">
            <div className="card video-card">
              <iframe
                src={props.videoUrl}
                title="YouTube video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>

            <div className="small-cards">
              <div className="card white-card box-1">
                <h2>{props.judul}</h2>
                <p>{props.deskripsi}</p>
              </div>

              <div className="card dark-card box-2">
                <ul>
                  <li>{props.poin1}</li>
                  <li>{props.poin2}</li>
                  <li>{props.poin3}</li>
                  <li>{props.poin4}</li>
                  <li>{props.poin5}</li>
                  <li>{props.poin6}</li>
                  <li>{props.poin7}</li>
                  <li>{props.poin8}</li>
                </ul>
              </div>
            </div>
          </div>
          <Sidebar />
        </div>
      </center>
    </body>
  );
}

export default Pages;
