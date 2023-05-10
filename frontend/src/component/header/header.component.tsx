import { useEffect, useState } from "react";
import "./header.css";
import logo from "../../images/logo3.jpeg";
import Link from "../link/link.component";
import Button from "../button/button.component";
import Image from "../image-component/image.component";

const Header = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [linkText, setLinkText] = useState("LOGIN");
  const [showSignupBtn, setShowSignupBtn] = useState(true);

  useEffect(() => {
    const emailfromStorage = localStorage.getItem("email");
    if (emailfromStorage && emailfromStorage !== "") {
      setLinkText("LOGOUT");
    } else {
      setLinkText("LOGIN");
    }
    if (linkText === "LOGOUT") {
      setShowSignupBtn(false);
    }
  }, [linkText]);

  const logOut = () => {
    if (linkText === "LOGOUT") {
      localStorage.setItem("email", "");
      window.location.href = "/login";
    }
  };

  function toggleOptions() {
    setShowOptions(!showOptions);
  }
  return (
    <header>
      <Image src={logo} alt="" className="logo" />
      <nav className="nav-bar">
        <Link href="/" linkText="HOME" className="header-link" />
        <Link
          href="/login"
          linkText={linkText}
          className="header-link"
          onClick={logOut}
        />
        {showSignupBtn && (
          <Button
            className="signupBtn"
            onMouseEnter={toggleOptions}
            btnText="SIGN UP"
          />
        )}
        {showOptions && (
          <div id="signup-options">
            <Link
              href="/registrationuser"
              linkText="Client Sign-up"
              className="signup-link"
            />
            <hr />
            <Link
              href="/registrationprofessional"
              linkText="Professional Sign-up"
              className="signup-link"
            />
          </div>
        )}
        <Link
          href="/#contact-us"
          linkText="CONTACT US"
          className="header-link"
        />
      </nav>
    </header>
  );
};

export default Header;
