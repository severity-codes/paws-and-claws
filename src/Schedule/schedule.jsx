import { useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./schedule.css";

export default function Schedule() {
  useEffect(() => {
    document.title = "Schedule - Paws and Claws";
  }, []);

  const [state, handleSubmit] = useForm("xovwwjzl");

  return (
    <div className="schedule-container">
      <h2 className="schedule-title">Schedule Pet Boarding</h2>

      {state.succeeded ? (
        <p className="schedule-success">
          Thanks! We'll be in touch to confirm your reservation.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="schedule-form">
          <label htmlFor="ownerName">Your Name</label>
          <input id="ownerName" name="ownerName" type="text" required />

          <label htmlFor="phone">Phone Number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            pattern="[0-9]{10,15}"
          />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" required />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <label htmlFor="petName">Pet's Name</label>
          <input id="petName" name="petName" type="text" required />

          <label htmlFor="dropOff">Drop-Off Date</label>
          <input id="dropOff" name="dropOff" type="date" required />

          <label htmlFor="pickUp">Pick-Up Date</label>
          <input id="pickUp" name="pickUp" type="date" required />

          <label htmlFor="notes">Additional Notes</label>
          <textarea id="notes" name="notes" rows="4" />

          <button type="submit" disabled={state.submitting}>
            Submit Request
          </button>
        </form>
      )}
    </div>
  );
}
//built