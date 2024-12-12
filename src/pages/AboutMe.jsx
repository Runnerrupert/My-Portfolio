import Lilguy from "../assets/images/lilguy.png"
import "./AboutMe.css";

export default function AboutMe() {
    return (
        <div className="aboutme-container">
            <div className="aboutme-left-container">
                <img src={Lilguy} alt="Profile Image"/>
            </div>
            <div className="aboutme-right-container">
                <div className="aboutme-textbox">
                    <h2>Welcome to My Portfolio</h2>
                    <p>
                        My name is Cameron Barfuss, and I am a passionate programmer with a deep curiosity for learning and creating. From a young age, I have been drawn to coding as a way to bring my ideas to life and share them with the world.
                    </p>
                    <p>
                        Learning is one of my greatest joys, whether it’s diving into fascinating articles, conducting personal data studies, or exploring new concepts. Outside of programming, I enjoy video games, which fuel my imagination and inspire me to think creatively. These experiences have shaped how I approach problem-solving and innovation, both personally and professionally.
                    </p>
                    <p>
                        This website is the start of an exciting journey—a platform to showcase my growth and the projects I’ve built along the way. In the Projects section, you’ll find a collection of work that reflects my learning and development as a programmer. Each project represents a step forward in my skill set and creativity, and I hope you find them as enjoyable to explore as I did to create.
                    </p>
                </div>
            </div>
        </div>
    )
}
