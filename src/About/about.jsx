import { useEffect } from "react";
import "./about.css";

export default function About() {
  useEffect(() => {
    document.title = "About - Paws and Claws";
  }, []);

  return (
    <div className="about-container">
      <h2 className="about-title">About Us</h2>
      <p className="about-text">
        Paws and Claws is a family-owned small business built on love, trust,
        and personalized care. We understand that pets are more than animals —
        they’re family. That’s why we treat every dog and cat in our care as if
        they were our own. Whether for a day or an extended stay, your pet’s
        comfort, safety, and happiness are our top priorities.
      </p>
    </div>
  );
}
