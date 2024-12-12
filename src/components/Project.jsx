function Project(props) {
    return (
        <div style={{backgroundImage: `url(${props.backgroundImg})`}}>
            <div>
                <h2>{props.title}</h2>
            </div>
            <div>
                <a href={props.link}>
                    <button> Github </button>
                </a>
            </div>
        </div>
    )
}

export default Project;