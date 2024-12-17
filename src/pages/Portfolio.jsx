import Project from "../components/Project";
import Challenge from "../components/Challenge";

import "./Portfolio.css";

// Images used inside of each project (Only one currently)
import Background from "../assets/images/backgroundimg.png";
import JobhubBackground from "../assets/images/jobhubimage.png";
import FinanceFlowBackground from "../assets/images/financeflowimage.png";
import ProjectPalBackground from "../assets/images/projectpalimage.png";

export default function Portfolio() {

    return (
    <>
        <div className="portfolio-main-container">
            <div className="projects-container">
                <h2 className="project-h2">Projects</h2>
                <div className="projects">
                    <Project
                    title={"ProjectPal"}
                    link="https://github.com/PeruvPowWow/ProjectPAL"
                    backgroundImg={ProjectPalBackground}
                    />
                    <Project
                    title={"Finance Flow"}
                    link="https://github.com/Runnerrupert/finance-flow"
                    backgroundImg={FinanceFlowBackground}
                    />
                    <Project
                    title={"JobHub"}
                    link="https://github.com/Runnerrupert/JobHub"
                    backgroundImg={JobhubBackground}
                    />
                </div>
            </div>
            <div className="challenges-container">
                <h2 className="challenges-h2">Challenges</h2>
                <div className="challenges">
                    <Challenge
                    title={"README Generator"}
                    link="https://github.com/Runnerrupert/README-Generator"
                    backgroundImg={Background}
                    />
                    <Challenge
                    title={"Company Tracker"}
                    link="https://github.com/Runnerrupert/Company-Tracker"
                    backgroundImg={Background}
                    />
                    <Challenge
                    title={"Vehicle Creator"}
                    link="https://github.com/Runnerrupert/Vehicle-Creator"
                    backgroundImg={Background}
                    />
                    <Challenge
                    title={"Blog Posts"}
                    link="https://github.com/Runnerrupert/Blog-Posts"
                    backgroundImg={Background}
                    />
                    <Challenge
                    title={"Employee Tracker"}
                    link="https://github.com/Runnerrupert/Employee-Tracker"
                    backgroundImg={Background}
                    />
                </div>
            </div>
        </div>
    </>
    )
}
