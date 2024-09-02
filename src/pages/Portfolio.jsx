import "../App.css";
import Project from "../components/Project"

// Images used inside of each project (Only one currently)
import Background from "../assets/images/backgroundimg.png";

export default function Portfolio() {

    return (
    <>
        <h2>Projects</h2>
        <div className="portfolioContainer">
            <Project
             title={"README Generator"}
             link="https://github.com/Runnerrupert/README-Generator"
             backgroundImg={Background}
            />
            <Project
             title={"Company Tracker"}
             link="https://github.com/Runnerrupert/Company-Tracker"
             backgroundImg={Background}
             />
            <Project
             title={"ProjectPal"}
             link="https://github.com/PeruvPowWow/ProjectPAL"
             backgroundImg={Background}
            />
            <Project
             title={"Vehicle Creator"}
             link="https://github.com/Runnerrupert/Vehicle-Creator"
             backgroundImg={Background}
            />
            <Project
             title={"Blog Posts"}
             link="https://github.com/Runnerrupert/Blog-Posts"
             backgroundImg={Background}
            />
            <Project
             title={"Employee Tracker"}
             link="https://github.com/Runnerrupert/Employee-Tracker"
             backgroundImg={Background}
            />
        </div>
    </>
    )
}
