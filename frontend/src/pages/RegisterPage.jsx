import { Navbar, Button, NavbarBrand, Form } from "react-bootstrap";
import { useState } from "react";
import logo from "../assets/Saly-38.png";

function RegisterPage() {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const buttonStyling = {
    background: isHover ? "black" : "#303030",
    cursor: "pointer",
    color: "white",
    padding: "8px",
    width: "300px",
    height: "40px",
    borderRadius: "8px",
    border: "0px",
    fontSize: "20px",
  };

  return (
    <div
      className="container"
      style={{
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <div className="navbar">
        <Navbar
          style={{
            fontSize: "48px",
            textAlign: "center",
            padding: "98px",
          }}
        >
          <NavbarBrand>Blogskuy Register</NavbarBrand>
        </Navbar>
      </div>

      <div className="registerContainer">
        <div
          className="imageContainer"
          style={{
            display: "inline-flex",
            width: "50%",
            float: "left",
          }}
        >
          <img src={logo} alt="saly" />
        </div>

        <div
          className="formContainer"
          style={{
            width: "50%",
            float: "right",
          }}
        >
          <Form.Group>
            <Form.Label
              style={{
                fontSize: "20px",
              }}
            >
              Full Name
            </Form.Label>
            <br />
            <Form.Control
              type="text"
              style={{
                width: "300px",
                height: "32px",
                borderRadius: "4px",
                background: "#C4C4C4",
                border: "none",
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label
              style={{
                fontSize: "20px",
              }}
            >
              Email
            </Form.Label>
            <br />
            <Form.Control
              type="email"
              style={{
                width: "300px",
                height: "32px",
                borderRadius: "4px",
                background: "#C4C4C4",
                border: "none",
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label
              style={{
                fontSize: "20px",
              }}
            >
              Password
            </Form.Label>
            <br />
            <Form.Control
              type="password"
              style={{
                width: "300px",
                height: "32px",
                borderRadius: "4px",
                background: "#C4C4C4",
                border: "none",
              }}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label
              style={{
                fontSize: "20px",
              }}
            >
              Confirm Password
            </Form.Label>
            <br />
            <Form.Control
              type="password"
              style={{
                width: "300px",
                height: "32px",
                borderRadius: "4px",
                background: "#C4C4C4",
                border: "none",
              }}
            />
          </Form.Group>

          <div
            className="registerButtonWrapper"
            style={{
              paddingTop: "24px",
            }}
          >
            <Button
              className="registerButton"
              style={buttonStyling}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
