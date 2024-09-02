import "../App.css";

export default function Contact() {

    const handleFormSubmit = (event) => {
        const usersName = document.getElementById("name");
        const emailAddress = document.getElementById("email");
        const userMessage = document.getElementById("message");
        const errorMessage = document.getElementById("errorMessage");

        event.preventDefault();

        const validateEmail = (email) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };

        if (!usersName.value || !emailAddress.value || !userMessage.value) {
            errorMessage.innerHTML = "Please completely fill out the form.";
        } else if (!validateEmail(emailAddress.value)) {
            errorMessage.innerHTML = "Please provide a valid Email Address.";
        } else {
            usersName.value = "";
            emailAddress.value = "";
            userMessage.value = "";
            errorMessage.innerHTML = "Message Sent! (This program doesn't actually have a backend.";
        }

      };

    return (
        <>  
            <h2>Contact Me</h2>
            <form className="form">
                <div>
                    <label>Name:</label>
                </div>
                <div>
                    <input type="text" id="name"></input>
                </div>
                <div>
                    <label>Email Address:</label>
                </div>
                <div>
                    <input type="text" id="email"></input>
                </div>
                <div>
                    <label>Message:</label>
                </div>
                <div>
                    <input type="text" id="message"></input>
                </div>
                <button className="m-2 btn submit" onClick={handleFormSubmit}>Submit</button>
            </form>
            <h3 className="text-center m-5 text-danger" id="errorMessage"></h3>
        </>
    )
}
