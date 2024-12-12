import "./Challenge.css";

function Challenge(props) {
    return (
        <a href={props.link} className="challenge-link">
            <div className="challenge-container" style={{backgroundImage: `url(${props.backgroundImg})`}}>
                <h2 className="challenge-title">{props.title}</h2>
            </div>
        </a>
    )
}

export default Challenge;