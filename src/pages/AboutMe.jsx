import "../App.css";
import lilguy from "../assets/images/lilGuy-1.png";

export default function AboutMe() {
    return (
        <div className="about-container">
            <img src={lilguy} alt="Profile Image"/>
            <div className="about-content">
                <h2>About Me</h2>
                <p>My name is Cameron Barfuss and I am a aspiring programmer. I have always wanted to learn how to code, mostly because I want to build, create and put my ideas into the world. I love learning, it is one of my favorite things to do, whether its through reading random articles on the internet or doing my own data studies specific to things I enjoy. </p>
                <p>I play video games and have an active imagination because of it, lots of my time is spent enjoying the creations of others with friends and family alike. </p>
                <p>This website is just the beginning of what I hope to achieve. Within the project tab are a few simple, but important projects for my development and growth. I hope you can enjoy them as much as I enjoyed learning how to build them.</p>
            </div>
        </div>
    )
}
