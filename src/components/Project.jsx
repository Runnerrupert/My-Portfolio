import "./Project.css";

function Project(props) {
    return (
        <div>
            <p className="created-date">{props.createdDate}</p>
            <a href={props.link} target="_blank" className="project-link">
            <div className="project-container">
                <div 
                    className="project-background" 
                    style={{backgroundImage: `url(${props.backgroundImg})`}}
                ></div>
                <h2 className="project-title">{props.title}</h2>
            </div>
            </a>
        </div>
    )
}

export default Project;