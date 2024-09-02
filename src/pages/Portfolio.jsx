import "../App.css";
import Project from "../components/Project"

import bgImgOne from "../assets/images/Background-Image1.jpg";

export default function Portfolio() {

    return (
    <>
        <h2>Projects</h2>
        <div className="portfolioContainer">
            <Project
             title={"README Generator"}
             link="https://github.com/Runnerrupert/README-Generator"
             backgroundImg={bgImgOne}
            />
            <Project
             title={"Company Tracker"}
             link="https://github.com/Runnerrupert/Company-Tracker"
             backgroundImg={bgImgOne}
             />
            <Project
             title={"ProjectPal"}
             link="https://github.com/PeruvPowWow/ProjectPAL"
             backgroundImg={bgImgOne}
            />
            <Project
             title={"Vehicle Creator"}
             link="https://github.com/Runnerrupert/Vehicle-Creator"
             backgroundImg={bgImgOne}
            />
            <Project
             title={"Blog Posts"}
             link="https://github.com/Runnerrupert/Blog-Posts"
             backgroundImg={bgImgOne}
            />
            <Project
             title={"Employee Tracker"}
             link="https://github.com/Runnerrupert/Employee-Tracker"
             backgroundImg={bgImgOne}
            />
        </div>
    </>
    )
}
