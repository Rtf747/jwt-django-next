import { useContext } from 'react';
import styled from 'styled-components';
import NavBar from '../components/header';
import AuthContext from '../context/AuthContext';

const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100vw;
height: 90vh;
`

const StyledForm = styled.form`
background-color: white;
border-radius: 5px;
width: 90%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
padding: 1rem;
box-shadow:  1px 10px 10px 0px rgba(0,0,0,0.75);

@media (min-width: 768px) {
  width: 40%;
}
`

const StyledInputs = styled.input`
padding: 0.8rem;
font-size: 1.2rem;
font-weight: bold;
font-family: 'Roboto', sans-serif;
margin: 0.5rem;
border-radius: 5px;
border-color: aliceblue;
`

const StyleSubmit = styled.input`
padding: 0.8rem;
font-size: 1.2rem;
font-weight: bold;
font-family: 'Roboto', sans-serif;
margin: 0.5rem;
border-radius: 5px;
background-color: rgb(56,204,140);
color:aliceblue;
border: none;
box-shadow: 1px 3px 0px 0px rgba(0,0,0,0.40);
`

const Login = () => {
 const { loginUser } = useContext(AuthContext);

 const handleSubmit = (e) => {
  e.preventDefault();
  loginUser(e);
 };
 return (
  <>
   <NavBar />
   <Container>
   <StyledForm onSubmit={handleSubmit}>
    <StyledInputs type='text' name='username' placeholder='Enter User' />
    <StyledInputs type='password' name='password' placeholder='Enter Password' />
    <StyleSubmit type='submit' />
   </StyledForm>
   </Container>
  </>
 );
};

export default Login;
