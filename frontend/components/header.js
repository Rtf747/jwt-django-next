/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../context/AuthContext';

const Container = styled.div`
background-color: rgb(96,85,165);
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 1rem;
font-weight: 500;
font-size: 1.5rem;
color: aliceblue;
box-shadow: 1px 3px 10px 0px rgba(0,0,0,0.40);

`
const User = styled.div`
margin: 0;
margin-left: 1rem;
padding: 0;
`

const StyledAnchor = styled.a`
cursor: pointer;
margin: 0.5rem;
&:hover{
  color: gray;
}
`

const NavBar = () => {
 let { user, logOutUser } = useContext(AuthContext);
 return (
  <>
<Container>
   <Link href='/'>
    <StyledAnchor>Home</StyledAnchor>
   </Link>
   ||
   {user ? <StyledAnchor onClick={logOutUser}> Logout</StyledAnchor>: <Link href='/login'>
    <StyledAnchor>Login</StyledAnchor>
   </Link>}
   {user && <User> Hello, {user.username}</User>}   
   </Container>
  </>
 );
};

export default NavBar;
