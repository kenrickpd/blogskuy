import { Navbar, Button, NavbarBrand, Form } from "react-bootstrap";
import logo from '../assets/Saly-38.png';
import '../style/LoginPage.css';

function LoginPage() {
    return(
        <div className="navbarBackground">
            <Navbar className="navbarText">
                <NavbarBrand>
                    Blogskuy Login
                </NavbarBrand>
            </Navbar>

            <div className="loginContainer">
                <div className="image">
                    <img src={logo} alt="saly" style={{width:"500px"}}/>
                </div>

                <div className="formBox">
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                </div>

                <div>
                    <Button>Login</Button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;