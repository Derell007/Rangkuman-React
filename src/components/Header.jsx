import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <div class="logo">
          <img src="/8665571_laptop_code_icon 1.svg" alt="Logo" height="35px" />
          <p>
            DIGITAL PRODUCT <br /> ENGINEERING
          </p>
        </div>
        <nav>
          <a>
            <Link to="/">HOME</Link>
          </a>
          <a>
            <Link to="/article">ARTICLE</Link>
          </a>
          <a href="#">ACTIVITY</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
