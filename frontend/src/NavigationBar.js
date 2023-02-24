import { Navbar, Nav, Container, Button } from "react-bootstrap";
import "./style/NavigationBar.css";

const NavigationBar = () =>{
    return(
        <div className="navBarBackground">

            <Navbar bg="light" variant="flat" className="NavbarText">
                <Container>
                    <Navbar.Brand className="title">Blog<span className="textSkuy">skuy</span></Navbar.Brand>
                        <Nav.Link className="link">Blog</Nav.Link>
                        <div className="loginButtonWrapper">
                            <Button className="loginButton">Login</Button>
                        </div>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;