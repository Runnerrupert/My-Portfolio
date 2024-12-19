import resume from '../assets/resume.txt';
import "./Resume.css";

export default function Resume() {
    return (
        <>
            <div className="resume-page">
                <a href={resume} download className="download-link">Click Here to Download My Resume</a>
                <div className="resume-container">
                    <div className="proficiency-container">
                        <h2>Front-End Proficiencies</h2>
                        <ul>
                            <li className="resumeItem">HTML</li>
                            <li className="resumeItem">CSS</li>
                            <li className="resumeItem">Javascript</li>
                            <li className="resumeItem">Web Design</li>
                            <li className="resumeItem">Responsive Design</li>
                            <li className="resumeItem">React Router</li>
                        </ul>
                    </div>
                    <div className="proficiency-container">
                        <h2>Back-End Proficiencies</h2>
                        <ul>
                            <li className="resumeItem">SQL</li>
                            <li className="resumeItem">Node.js</li>
                            <li className="resumeItem">Express.js</li>
                            <li className="resumeItem">MongoDB</li>
                            <li className="resumeItem">JWT Tokens</li>
                            <li className="resumeItem">Bcrypt</li>
                            <li className="resumeItem">GraphQL</li>
                        </ul>
                    </div>
                    <div className="proficiency-container">
                        <h2>Other Proficiencies</h2>
                        <ul>
                            <li className="resumeItem">Typing Speed: 80 Words Per Minute</li>
                        </ul>
                    </div>
                </div>
            </div>  
        </>
        
    )
}
  