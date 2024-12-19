// import Lilguy from "../assets/images/lilguy.png"
import PersonalPhoto from "../assets/images/personalphoto.png";
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <div className="aboutme-container">
            <div className="aboutme-left-container">
                <img src={PersonalPhoto} alt="Profile Image"/>
            </div>
            <div className="aboutme-right-container">
                <div className="aboutme-textbox">
                    <h2>Welcome to My Portfolio</h2>
                    <p>
                        Hi, my name is Cameron Barfuss, and I am a passionate programmer driven by curiosity and a love for creating. From an early age, I discovered coding as a powerful way to transform ideas into reality and share them with the world.
                    </p>
                    <p>
                        I find joy in continuous learning, whether by exploring thought-provoking articles, analyzing data, or delving into new technologies. Outside of programming, I immerse myself in experiences that fuel creativity and spark innovation, which deeply influence my approach to problem-solving and design.
                    </p>
                    <p>
                        This website marks the beginning of an exciting journey—a space to showcase my growth and the projects I've built along the way. The Projects section highlights work that reflects my expanding skill set and creativity, each project representing a meaningful step forward in my development. I invite you to explore these creations and share in the excitement of discovery and progress.
                    </p>
                </div>
            </div>
        </div>
    )
}
