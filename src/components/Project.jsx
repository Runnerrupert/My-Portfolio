import "../App.css";

function Project(props) {
    return (
        <div className="portfolioCard">
            <h2>{props.title}</h2>
            <a className="text-center" href={props.link}>
                <button className="btn button"> Github </button>
            </a>
        </div>
    )
}

export default Project;