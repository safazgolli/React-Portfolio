import React from "react";
import Cv from "../../assets/resumecv.pdf";

const styles = {
  container: {
    margin: "25px",
    width: "100%",
    height: "100%"
  },

  centered: {
  
  },
};

export default function resume() {
  return (
   
      <div className="resume-container text-center">
        <div className="row justify-content-center" style={styles.centered}>
          <h1 className="text-white text-center" style={{ fontSize: "2.5rem" }}>
            {" "}
            Resume
          </h1>

          <p style={{ fontSize: "1rem" }}>
            Bilingual junior web developer, able to build a web presence concept
            and navigation. Skilled in writing well-designed, testable and
            efficient code using current best practices in Web development. Fast
            learner, hard worker and team player who is proficient in an array
            of scripting languages and multimedia Web tools.
            <h2 className="text-white text-center">Technical skills </h2>
            <ul>
              <li>
                Experience developing and supporting web based applications
              </li>
              <li>Experience with Html, CSS, and JavaScript</li>
              <li>Experience with Mysql , node js, Express.js</li>
              <li>Experience with mongodb and MVC</li>
              <li>Experience with React.js</li>
              <li>Experience with GitHub</li>
              <li>
                Knowledge with Brackets, Adobe Photoshop, Adobe illustrator,
                Adobe Premiere Pro, and Dreamweaver
              </li>
              <li>Experience with IE, Firefox, Safari, and Chrome</li>
              <li>Knowledge of PHP, Oracle, and C++</li>
              <li>Knowledge of Microsoft Excel, Word, and Powerpoint</li>
              <li>Microsoft PC and Mac OS</li>
              <li>Advanced knowledge of Graphic Design</li>
            </ul>
          </p>
          <a href={Cv} download={Cv}>
            {" "}
            <button className="btn btn-primary"> Resume for download</button>
          </a>
        </div>
      </div>
  ) 
    
}
