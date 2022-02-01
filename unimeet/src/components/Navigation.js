
import { Nav,Container,Navbar,Button } from 'react-bootstrap';
import {signInGoogle,signOutGoogle,userphoto} from './Firebase'


/*
Two navbars. If signed in they switch.
*/
 
export const NavBar1 = () => {
return(
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand>UniMeet</Navbar.Brand>
    <Button onClick={signInGoogle}> Sign in</Button>
    </Container>
  </Navbar>
)
}

export const NavBar2 = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">UniMeet</Navbar.Brand>
        <Nav className="me-auto">
        </Nav>
        <div className="custonbuttom">
        <Button onClick={signOutGoogle}> Sign out</Button>
        </div>
        <img className="userimage" alt="Userimage" src={userphoto} />
      </Container>
    </Navbar>

  )
}



