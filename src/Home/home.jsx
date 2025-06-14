import { useEffect } from "react";
import "./home.css";
import homeLogo from "../assets/home-logo.jpg";
// eslint-disable-next-line no-unused-vars
import petsBg from "../assets/pets.png";

export default function Home() {
  useEffect(() => {
    document.title = "Paws and Claws";
  }, []);

  return (
    <div className="home-container">
      <header className="home-header">
        <img src={homeLogo} alt="Paws and Claws Logo" className="home-logo" />
        <h1 className="home-title">Paws and Claws</h1>
      </header>

      <main className="home-main">
        <h2 className="home-welcome">
          Welcome to Paws and Claws Pet Boarding and Daycare!
        </h2>
        <div className="welcome-bg"></div>
      </main>
    </div>
  );
}
