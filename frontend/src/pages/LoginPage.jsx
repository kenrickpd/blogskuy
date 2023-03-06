import { Navbar, Button, NavbarBrand, Form } from "react-bootstrap";
import logo from '../assets/Saly-38.png';

function LoginPage() {
    return(
        <div 
            style={{
                justifyContent:"center", 
                textAlign: "center"
                }}
            >

            <div>
                <Navbar 
                    style={{
                        fontSize: "48px",
                        textAlign: "center",
                        padding: "98px"
                    }}
                >
                    <NavbarBrand>
                        Blogskuy Login
                    </NavbarBrand>
                </Navbar>
            </div>

            <div 
                style={{
                    display:"inline-flex",
                    boxSizing: "border-box"
                    }}
                >
                
                <div 
                    style={{
                        display: "inline-flex", 
                        width: "50%", 
                        float:"left"
                        }}
                    >
                    
                    <img src={logo} alt="saly"/>
                </div>

                <div 
                    style={{
                        width: "50%", 
                        float:"right"
                        }}
                    >
                    
                    <Form.Group>
                        <Form.Label 
                            style={{
                            fontSize: "20px"
                            }}
                        >Email</Form.Label>
                        
                        <br></br>

                        <Form.Control 
                            type="email" 
                            style={{
                                width: "300px",
                                height: "32px",
                                borderRadius: "4px",
                                background:"#C4C4C4",     
                                border: "0px"
                            }}
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label 
                            style={{
                                fontSize: "20px"
                            }}
                        >Password</Form.Label>

                        <br></br>
                        
                        <Form.Control 
                            type="password" 
                            style={{
                                width: "300px",
                                height: "32px",
                                borderRadius: "4px",
                                background:"#C4C4C4",     
                                border: "0px"
                            }}
                        />
                    </Form.Group>

                    <div
                        style={{
                            paddingTop:"24px"
                        }}
                    >
                        <Button 
                            style={{
                                    background: "black",
                                    color: "white",
                                    padding: "8px",
                                    width: "300px",
                                    height: "40px",
                                    borderRadius: "8px",
                                    border: "0px"
                            }}
                        >Login</Button>
                    </div>
                </div>

            </div>

    </div>
    )
}

export default LoginPage;