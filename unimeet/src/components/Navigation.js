


import {Nav,Container,Navbar,Button } from 'react-bootstrap';
import {signInGoogle,signOutGoogle,Userphoto} from './Firebase';
import { useNavigate } from "react-router-dom";
import logo from "..//images/logo.jpg";
import uncc2 from "..//images/uncc2.jpg";


/*Two navbars. If signed in they switch.*/
 
export const NavBar1 = () => {
return(
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand><img src={logo} height = {120} alt= "logo"/></Navbar.Brand>
    <img src={uncc2} height = {150} style={{paddingRight: '80px',  }}alt= "uncc2"/>
    <Button variant="success" onClick={signInGoogle}> Sign in</Button>
    </Container>
  </Navbar>
)
}

export const NavBar2 = () => {
  const navigate = useNavigate();
  
  const navigateCreateEventPate = () => navigate("/CreateEventPage");
  const navigateDashBoard = () =>  navigate('/Dashboard');
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand onClick={navigateDashBoard}> <img src={logo} height = {120} alt= "logo"/></Navbar.Brand>
        <Nav className="me-auto">
        <img src={uncc2} height = {150} style={{paddingLeft: '250px',  }}alt= "uncc2"/>
        </Nav>
        <div className="custonbuttom">
          
        <Button variant="success" onClick={navigateCreateEventPate}> Create Event</Button>&nbsp;&nbsp;&nbsp;
        <Button variant="success" onClick={signOutGoogle}> Sign out</Button>
        </div>
       <Userphoto/>
      
      </Container>
    </Navbar>

  )
}




