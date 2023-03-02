import { Navbar, Nav, Container, Button } from "react-bootstrap";
import './style/LandingPage.css';

function LandingPage() {
  return (
    <div>
      <div className="navBarBackground">
        <Navbar className="NavbarText">
            <Container>
                <Navbar.Brand className="title">Blog<span className="textSkuy">skuy</span></Navbar.Brand>
                    <Nav.Link className="link">Blog</Nav.Link>
                    <div className="loginButtonWrapper">
                        <Button className="loginButton">Login</Button>
                    </div>
            </Container>
        </Navbar>
      </div>

      <div>
        <p style={{
                  fontSize: '100px', 
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
                  marginBottom: '0px'}}>no <span style={{fontWeight: 'bold'}}>blog</span></p>
        <p style={{
                  fontSize: '100px', 
                  textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
                  marginTop: '0px'}}>no <span style={{color: '#FFB800'}}>skuy</span></p>
      </div>
    </div>
  );
}

export default LandingPage;
