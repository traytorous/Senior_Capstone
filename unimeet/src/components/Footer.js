import React from "react";
/* The footer contains formating for multiple columns and rows within a container in case you want to expand the footer later */
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

/* Footer is for all of the pages after signing in  the about us and contact us will take you to the 
 * perspectivve pages///// you can alos log out of Unimeet from those pages */

export const Footer = () => {
  return (
    <Box>
      <Container>
          <Row>
           <Column>
             <Heading> <small>&copy; 2022, Unimeet</small></Heading>
           </Column>
          <Column>
             <Heading><FooterLink href="AboutUs">About Us</FooterLink></Heading>
          </Column>
          <Column>
            <Heading><FooterLink href="ContactUs">Contact Us</FooterLink></Heading>
         
          </Column>
        </Row>
      </Container>
    </Box>
  );
};


/*Footer 1 is for the page before sign in and only has the unimeet logo */


export const Footer1 = () => {
    return (
        <Box>
            <Container>
                <Row>
                   
                    <Column>
                        </Column>
                    <Column>
                        <Heading> <small>&copy; 2022, Unimeet</small></Heading>
                    </Column>
                   
                </Row>
            </Container>
        </Box>
    );
};

