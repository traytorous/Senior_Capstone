
import {Nav,Container,Navbar,Button } from 'react-bootstrap';
import {signInGoogle,signOutGoogle,Userphoto} from './Firebase';
import { useNavigate } from "react-router-dom";

/*import '../images/unimeetlogo.png'*/
/*Two navbars. If signed in they switch.*/
 
export const NavBar1 = () => {
return(
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>UniMeet</Navbar.Brand>
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
        <Navbar.Brand onClick={navigateDashBoard}>UniMeet</Navbar.Brand>
        <Nav className="me-auto">
        </Nav>
        <div className="custonbuttom">
          
        <Button variant="success" onClick={navigateCreateEventPate}> Create Event</Button>
        <Button variant="success" onClick={signOutGoogle}> Sign out</Button>
        </div>
       <Userphoto/>
      </Container>
    </Navbar>

  )
}



