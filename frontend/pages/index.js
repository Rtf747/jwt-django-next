import styled from 'styled-components';
import NavBar from '../components/header';
import PrivateRoute from '../components/PrivateRoute';



const FlexContainer = styled.div`
width: 100%;
height: 50vh;
display: flex;
justify-content: center;
align-items: center;
`

const TextContainer = styled.div`
background-color: white;
width: auto;
padding: 1rem;
border-radius: 1rem;
background-color: rgb(56,204,140);
color: aliceblue;
`


export default function Home() {
 return (
  <>
 
  <PrivateRoute >
   <NavBar />
   <FlexContainer>
   <TextContainer>
   <h1>You are logged in on the main page!</h1>
   </TextContainer>
   </FlexContainer>
   </PrivateRoute>
  </>
 );
}
