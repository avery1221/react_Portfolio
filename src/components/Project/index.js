import React from "react";
import "./style.css";

function Project(props) {
  return (
    <div className="col-lg-4 col-sm-12">
      <div className="card mt-1" style={{ fontSize: "12pt", width: "23rem" }}>
        <img src={props.imgSrc} alt={props.title} width="50%" />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.authors}</h6>
          <p className="card-text">{props.description}</p>
          <a
            href={props.appLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            Application
          </a>
          <a
            href={props.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
