import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import './style/LandingPage.css';
import logo from './assets/Saly-38.png';
import LoginPage from "./LoginPage";

function LandingPage() {
  const [goToLogin, setGoToLogin] = React.useState(false);

  if (goToLogin){
    return <Navigate to="/LoginPage" />
  }

  return (
    <div>
      <div className="navBarBackground">
        <Navbar className="NavbarText">
            <Container>
                <Navbar.Brand className="title">Blog<span className="textSkuy">skuy</span></Navbar.Brand>
                    <Nav.Link className="link">Blog</Nav.Link>
                    <div className="loginButtonWrapper">
                        <Button className="loginButton" 
                        onClick={() => {setGoToLogin(true)}}>Login</Button>
                    </div>
            </Container>
        </Navbar>
      </div>

      <div style={{
                    display: "flex", 
                    padding:"30px",
                    paddingLeft: "200px"}}>
        <div style={{flex: "1"}}>
          <p style={{
                    fontSize: '128px', 
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
                    marginBottom: '0px'}}>no <span style={{fontWeight: 'bold'}}>blog</span></p>
          <p style={{
                    fontSize: '128px', 
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', 
                    marginTop: '0px'}}>no <span style={{color: '#FFB800'}}>skuy</span></p>
        </div>
        
        <div  style={{
                    display: "inline", 
                    margin: "10px", 
                    paddingRight: "200px"}}>
          <img src={logo} alt="saly"/>
        </div>
      </div>

      
    </div>
  );
}

export default LandingPage;