import styled from 'styled-components';


/* styling for footer page*/


export const Box = styled.div`
 
 background-color:#005035;
  margin: auto;
  width: 99%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  min-height: 10vh;
  font-size: calc(3px + 2vmin);
  }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 700px;
    margin: 0 auto;
    /* background: red; */
`

export const Column = styled.div`
 
  flex-direction: column;
 
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(200px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;

export const FooterLink = styled.a`
  color: #fff;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
`;

export const Heading = styled.p`
  color: #fff;
margin-top:40px;
  margin-bottom: 40px;
  font-weight: bold;
`;