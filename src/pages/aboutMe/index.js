import React from "react";

function AboutMe() {
  return (
    <div>
      <div className="container content mt-4">
        <div className="row mt-2">
          <div className="col-md-12">
            <div id="contentHeader">
              <h2>About Me</h2>
            </div>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-12 col-md-4">
            <img
              height="200px"
              width="200px"
              className="myPicture img-fluid"
              src="./images/avery.jpg"
              alt=""
            />
          </div>
          <div className="col-12 col-md-8 pt-2 pt-md-0">
            <p>
              I currently live and work in Lawrence Kansas. I went to Johnson
              County Community college for a 2 years in pursuit of a web development degree, 
              and am now looking to show my skills in the full stack web development job field. 
            </p>
            <p>
              {" "}
              I have worked a very wide array of jobs you can possibly get with
              little to no skills necessary. Now i am ready to put my coding knowledge to use
              and do something that allows me to apply my skills and have much more job potential. 
              I have learned to develop software for multiple platforms using
              several different technologies, and i am always eager to put my knowledge out there. 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul id="skills">
              <p>Skills:</p>
              <li>HTML/CSS</li>
              <li>Javascript/jQuery</li>
              <li>Microsoft Access/MySQL/SQL Server/Postgres</li>
              <li>MongoDb atlas/cloud/server</li>
              <li>Visual Studio</li>
              <li>React</li>
            </ul>
          </div>
          <div className="col-md-6">
            <p>Links:</p>
            <ul id="Links">
              <li>
                <a
                  href="https://docs.google.com/document/d/1nypfpzJRjOsVsFbuV4nuFg1izZwmS8gmbBg_nROlw8U"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/avery1221"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/avery-rouser-b9a642146/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
