import "../App.css";

export default function Resume() {
    return (
        <>
            <div className="text-center m-5">
                <a href="">Click Here to Download My Resume</a>
            </div>
            <div className="skillSection">
                <h2>Front-End Proficiencies</h2>
                <ul>
                    <li className="resumeItem">HTML</li>
                    <li className="resumeItem">CSS</li>
                    <li className="resumeItem">Javascript</li>
                    <li className="resumeItem">Web Design</li>
                    <li className="resumeItem">React</li>
                </ul>
                <h2>Back-End Proficiencies</h2>
                <ul>
                    <li className="resumeItem">SQL</li>
                    <li className="resumeItem">Node.js</li>
                    <li className="resumeItem">Express.js</li>
                </ul>
                <h2>Other Proficiencies</h2>
                <ul>
                    <li className="resumeItem">Typing Speed: 80 Words Per Minute</li>
                </ul>
            </div>
        </>
        
    )
}
  