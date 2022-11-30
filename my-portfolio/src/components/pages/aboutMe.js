import React from "react";
import Me from "../../assets/me.jpeg";
import Typical from "react-typical";

export default function aboutMe() {
  return (
    <div className="container text-center mb-5">
      
      <div className="flex-row justify-space-between my-4">
        <img
          src={Me}
          alt="me"
          className="rounded-circle"
          style={{ width: "250px" }}
        />
      </div>
      <div className="col-12 col-xl-6">
        <h2
          className="card-header text-light p-2 m-0"
          style={{ fontSize: "2.5rem" }}
        >
          {" "}
          <Typical
            steps={[
              "Who is this girl?",
              1000,
              "I am a Full-stack Wed Developer",
              500,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </h2>
      </div>

      <div className="col-12 col-xl-6">
        <p style={{ fontSize: "2rem" }}>
          I'm a Full-stack Developer from Milton , ON . I have serious passion
          for JavaScript coding , Back-End Deevelopment , dynamic user
          experiences. Let's make something special
        </p>
      </div>
    </div>
  );
}
