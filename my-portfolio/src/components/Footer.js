import React from "react";
import { Github, Linkedin, Twitter } from "react-bootstrap-icons";

export default function Footer() {
  return (
    <footer className="w-100 mt-auto text-dark p-4">
      <div className="container text-center mb-5">
        <div className="row">
          <div className="col">
            {" "}
            <a href="https://github.com/safazgolli">
              <Github color="black" size={60} />
            </a>
          </div>
          <div className="col">
            {" "}
            <a href="https://www.linkedin.com/in/safa-zgolli-9b2123181/">
              <Linkedin color="black" size={60} />
            </a>
          </div>
          <div className="col">
            {" "}
            <a href="https://twitter.com/SZgilli">
              <Twitter color="black" size={60} />
            </a>
          </div>
          <div className="row">
            <h4>&copy; {new Date().getFullYear()} -safa zgolli</h4>
          </div>
        </div>
      </div>
    </footer>
  );
}
