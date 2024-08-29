import "../App.css";

export default function Contact() {
    return (
        <>  
            <h2>Contact Me</h2>
            <form className="form">
                <div>
                    <label>Name:</label>
                </div>
                <div>
                    <input></input>
                </div>
                <div>
                    <label>Email Address:</label>
                </div>
                <div>
                    <input></input>
                </div>
                <div>
                    <label>Message:</label>
                </div>
                <div>
                    <input></input>
                </div>
                <button className="m-2 btn submit">Submit</button>
            </form>
        </>
    )
}
