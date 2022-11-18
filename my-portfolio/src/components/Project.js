import React from "react";
const styles ={
    img : {
        maxWidth: "750px",
        
    },
 
};
export default function Portfolio(props){
    return (
       
        <div  >
            {props.project.map((project)=> (
                <div className ="card bg-transparent  " key={project.id}>
                    <img 
                    src ={project.img}
                    className ="card-img-top "
                    alt=  ""
                    style={styles.img} 
                    />
                <div className="card-body">
                    <h4 className="card-title">{project.title}</h4>
                    <p className="card-text desc">{project.description}</p>
                    < a href={project.git} className= "btn btn-primary">
                        check Github
                    </a>
                    {project.url? (
                        <a href ={project.url} className="btn btn-primary">
                            Check the Web site
                        </a>
                    ): null}
                </div>
                </div>
                    
            ))}
        </div>
      
    );
}