import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.css";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - Paws and Claws";
  }, []);

  const [state, handleSubmit] = useForm("xovwwjzl");

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contact Us</h2>
      {state.succeeded ? (
        <p className="contact-success">
          Thanks for reaching out! We'll get back to you shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="email">Email Address</label>
          <input id="email" type="email" name="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />

          <button type="submit" disabled={state.submitting}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
