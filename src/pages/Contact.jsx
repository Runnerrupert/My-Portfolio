import "./Contact.css";

export default function Contact() {

    // Function to check if everything is filled out and correct upon pressing the submit button
    const handleFormSubmit = (event) => {
        const usersName = document.getElementById("name");
        const emailAddress = document.getElementById("email");
        const userMessage = document.getElementById("message");
        const errorMessage = document.getElementById("errorMessage");

        // Prevents the page from refreshing by default
        event.preventDefault();

        // Function to validate if the email has the characters it requires
        const validateEmail = (email) => {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        };

        // Checks if there is anything within the different inputs inserts an errorMessage if there is not
        if (!usersName.value) {
            errorMessage.innerHTML = "Please completely fill out the form.";
        } else if (!validateEmail(emailAddress.value)) {
            errorMessage.innerHTML = "Please provide a valid Email Address.";
        } else if (!userMessage.value) {
            errorMessage.innerHTML = "Please provide a message.";
        } else {
            // Resets each value to be blank upon submit
            usersName.value = "";
            emailAddress.value = "";
            userMessage.value = "";
            errorMessage.innerHTML = "Message Sent! (This program doesn't actually have a backend)";
        }

      };

    return (
        <>  
            <div className="contact-page">
                
                <form className="contact-form-container">
                    <h2 className="contact-title">Contact Me</h2>
                    <div className="label-text-box">
                        <label>Name:</label>
                        <input type="text" id="name" placeholder="Enter your name"></input>
                    </div>
                    <div className="label-text-box">
                        <label>Email Address:</label>
                        <input type="text" id="email" placeholder="Enter your email"></input>
                    </div>
                    <div className="label-text-box">
                        <label>Message:</label>
                        <textarea type="text" id="message"></textarea>
                    </div>
                    <button onClick={handleFormSubmit} className="submit-button">Submit</button>
                </form>
                <h3 id="errorMessage" className="error-message"></h3>
            </div>
        </>
    )
}
