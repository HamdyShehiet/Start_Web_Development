import { useState } from "react";

function Contact() {
    const [formInputs, setFormInputs] = useState({
        name : "",
        email: "",
        message: "",
    })

    function sendMessage(){
        console.log(formInputs);
        setFormInputs({
            name : "",
            email: "",
            message: "",
        })
    }

    return (
        <>
        <section className="contact-us">
            <div className="container row flex flex-column">
                <div className="info row flex flex-column">
                    <h1 className="title">Contact Us</h1>
                    <p className="special-description">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
                <div className="component row grid">
                    <div className="form-box">
                        <form method="post" className="flex" onSubmit={(e) => {e.preventDefault()}}>
                            <div className="name-field">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" name="name" required value={formInputs.name} onChange={(e)=>setFormInputs({...formInputs, name : e.target.value})}/>
                            </div>
                            <div className="email-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" required value={formInputs.email}  onChange={(e)=>setFormInputs({...formInputs, email : e.target.value})} />
                            </div>
                            <div className="message-field">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" required value={formInputs.message}  onChange={(e)=>setFormInputs({...formInputs, message : e.target.value})}></textarea>
                            </div>
                            <input type="submit" onClick={sendMessage} value="Submit" className="submit-btn" />
                        </form>
                    </div>
                    <div className="map">
                        <iframe 
                        title="google map" 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d191857.60467090734!2d-96.23442481611669!3d41.29199950509207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87938dc8b50cfced%3A0x46424d4fae37b604!2sOmaha%2C%20NE%2C%20USA!5e0!3m2!1sen!2seg!4v1738153064917!5m2!1sen!2seg" 
                        width="600" 
                        height="450" 
                        style={{border : 0}} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact;