import "./header.css";
import "./footer.css";

function Foot() {
  return (
    <footer>
      <div class="info">
        <img src="/image 1.svg" alt="Telkom Logo" height="60px" />
        <p>
          Gd. IndigoHub
          <br />
          Telkom Corporate University
          <br />
          Jl. Gegerkalong Hilir No 47
          <br />
          Bandung 40152
        </p>
      </div>
      <div class="links">
        <h1 style={{ color: "#00ADB5" }}>
          <strong>Quick Access</strong>
        </h1>
        <a href="#">Internship Members</a>
        <a href="#">Mentors</a>
        <a href="#">Manager</a>
      </div>
    </footer>
  );
}

export default Foot;
