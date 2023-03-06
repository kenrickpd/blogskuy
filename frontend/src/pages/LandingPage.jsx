import { React, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
// import { Navigate } from "react-router-dom";
import logo from "../assets/Saly-38.png";

function LandingPage() {
  // MASIH ERROR!!!
  // const [goToLogin, setGoToLogin, isHover, setIsHover] = React.useState(false);

  // if (goToLogin) {
  //   return <Navigate to="/LoginPage" />;
  // }

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  const loginButtonStyling = {
    background: isHover ? "#E2A600" : "#FFB800",
    cursor: "pointer",
    fontSize: "32px",
    padding: "8px",
    width: "148px",
    borderRadius: "8px",
    border: "none"
  }

  return (
    <div>
      <div
        className="navbarBackground"
        style={{
          background: "white",
          display: "flex",
        }}
      >
        <Navbar
          className="navbarText"
          style={{
            display: "inline-flex",
            padding: "30px",
          }}
        >
          <Container>
            <Navbar.Brand
              className="title"
              style={{
                fontSize: "48px",
                fontWeight: "thin",
              }}
            >
              Blog
              <span
                className="textSkuy"
                style={{
                  color: "orange",
                }}
              >
                skuy
              </span>
            </Navbar.Brand>

            <Nav.Link
              className="blogText"
              style={{
                color: "grey",
                marginLeft: "48px",
                fontSize: "32px",
                textDecoration: "none",
              }}
            >
              Blog
            </Nav.Link>

            <div
              className="loginButtonWrapper"
              style={{
                display: "inline-flex",
                paddingRight: "100px",
                position: "absolute",
                right: "0",
              }}
            >
              <Button
                className="loginButton"
                style={loginButtonStyling}
                onMouseEnter={handleMouseEnter}
                onMouseExit={handleMouseLeave}
                // onClick={() => {
                //   setGoToLogin(true);
                // }}
              >
                Login
              </Button>
            </div>
          </Container>
        </Navbar>
      </div>

      <div
        className="blogTitle"
        style={{
          display: "flex",
          padding: "30px",
          paddingLeft: "200px",
        }}
      >
        <div
          style={{
            flex: "1",
          }}
        >
          <p
            style={{
              fontSize: "128px",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              marginBottom: "0px",
            }}
          >
            no
            <span
              style={{
                fontWeight: "bold",
              }}
            >
              blog
            </span>
          </p>

          <p
            style={{
              fontSize: "128px",
              textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              marginTop: "0px",
            }}
          >
            no
            <span
              style={{
                color: "#FFB800",
              }}
            >
              skuy
            </span>
          </p>
        </div>

        <div
          className="imageContainer"
          style={{
            display: "inline",
            margin: "10px",
            paddingRight: "200px",
          }}
        >
          <img src={logo} alt="saly" />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
