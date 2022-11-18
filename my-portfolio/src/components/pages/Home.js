import React from "react";


const styles = {
  container: {
    margin: "25px",
    width: "100%",
    height: "100%",
    position: "relative",
  },

  centered: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function Home() {
  return (
    
      <div className="container text-center mb-5">
        <div className="row justify-content-center" style={styles.centered}>
          <h1 className="float-md-center"> Hello I'm Safa!</h1>
          <p
            steps={["Hello", 1000, "Hello world!", 500]}
            loop={Infinity}
            wrapper="p"
          >
            I'm Web developer Hire me !
          </p>
        </div>
      </div>
 
  );
}
