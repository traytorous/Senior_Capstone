
import { Nav,Container,Navbar,Button } from 'react-bootstrap';
import userimage from '../userimage.jpg';
import '../App.css'


export const NavBar1 = () => {
return(
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">UniMeet</Navbar.Brand>
    <Button> Sign in</Button>
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
        <img className="userimage" src={userimage} />
      </Container>
    </Navbar>


  )
}


/*
export const Navbarfunctional = () => {
    return(



    )
}
*/


