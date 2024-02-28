import "./contact.css";
import ContactForm from "./contactform/contactform";
import ContactSection1 from "./contactsection1/contactsection1";
import ContactFAQ from "./contactFAQ/contactFAQ";

function Contact() {
  return (
    <div className="contact_outer">
      <div className="contact_mainPage">
        <ContactSection1 />
        <ContactFAQ />
        <ContactForm />
      </div>
    </div>
  );
}
export default Contact;
