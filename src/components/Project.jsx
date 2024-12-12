import "./Project.css";

function Project(props) {
    return (
        <a href={props.link} className="project-link">
            <div className="project-container">
                <div 
                    className="project-background" 
                    style={{backgroundImage: `url(${props.backgroundImg})`}}
                ></div>
                <h2 className="project-title">{props.title}</h2>
            </div>
        </a>
        
    )
}

export default Project;