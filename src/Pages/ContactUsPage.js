import Footer from "../Components/Footer";
import Header from "../Components/Header";
import "./contactuspage.css"

export default function ContactUsPage() {
    return (
        <section>
            <Header color={"black"}/>
            <div className="contact-form">
                <h2>Contact Us</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" rows="4"></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <Footer />
        </section>
    );
}
