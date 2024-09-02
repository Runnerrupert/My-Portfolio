import "../App.css";

function Project(props) {
    return (
        <div className="portfolioCard">
            <div>
                <h2>{props.title}</h2>
            </div>
            <div className="portfolioBtnCenter">
                <a href={props.link}>
                    <button className="portfolioBtn"> Github </button>
                </a>
            </div>
        </div>
    )
}

export default Project;