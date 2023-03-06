import { Navbar, Button, NavbarBrand, Form } from "react-bootstrap";
import { useState} from 'react';
import logo from "../assets/Saly-38.png";

function LoginPage() {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true)
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const buttonStyling = {
        background: isHover ? "black" : "#303030",
        cursor: "pointer",
        color: "white",
        padding: "8px",
        width: "300px",
        height: "40px",
        borderRadius: "8px",
        border: "0px",
        fontSize: "20px"
    }


  return (
    <div className="container"
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
          <NavbarBrand>Blogskuy Login</NavbarBrand>
        </Navbar>
      </div>

      <div className="loginContainer"
        style={{
          display: "inline-flex"
        }}
      >
        <div className="imageContainer"
          style={{
            display: "inline-flex",
            width: "50%",
            float: "left"
          }}
        >
          <img src={logo} alt="saly" />
        </div>

        <div className="formContainer"
          style={{
            width: "50%",
            float: "right",
          }}
        >
          <Form.Group className="emailInput">
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
                border: "0px",
              }}
            />
          </Form.Group>

          <Form.Group className="passwordInput">
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
                border: "0px",
              }}
            />
          </Form.Group>

          <div className="loginButtonWrapper"
            style={{
              paddingTop: "24px"
            }}
          >
            <Button className="loginButton"
              style={buttonStyling
              }
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
