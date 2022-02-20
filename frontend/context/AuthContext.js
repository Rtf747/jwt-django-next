import { createContext, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode"
import { useRouter } from 'next/router';

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

  let authState
  let userState

  if (typeof window !== 'undefined') {
    authState = localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null
    userState = localStorage.getItem("authTokens") ? jwt_decode(localStorage.getItem("authTokens")) : null
}

 const [authTokens, setAuthTokens] = useState(authState);
 const [user, setUser] = useState(userState);
const [loading, setloading] = useState(true)

const router = useRouter()

 const loginUser = async (e) => {
  let response = await fetch('http://127.0.0.1:8000/api/token/', {
   method: 'POST',
   headers: {
    'Content-Type':'application/json',
   },
   body: JSON.stringify({
    'username': e.target.username.value,
    'password': e.target.password.value,
   }),
  });
  let data = await response.json();
  if(response.status === 200){
    setAuthTokens(data)
    setUser(jwt_decode(data.access))
    localStorage.setItem("authTokens", JSON.stringify(data))
    router.push('/');
  }else{
    alert("Something went wrong!")
  }
 };

let logOutUser = () =>{
  setAuthTokens(null)
  setUser(null)
  localStorage.removeItem("authTokens")
  router.push('/login');
}

let updateToken = async()=>{
  console.log("update token called");
  let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
   method: 'POST',
   headers: {
    'Content-Type':'application/json',
   },
   body: JSON.stringify({
    'refresh': authTokens.refresh
   }),
  });
  let data = await response.json();

  if(response.status === 200){
    setAuthTokens(data)
    setUser(jwt_decode(data.access))
    localStorage.setItem("authTokens", JSON.stringify(data))
  }else{
    logOutUser()
  }
}

 const contextData = {
   user,
  loginUser,
  logOutUser,
 };

 useEffect(() => {

  let fourMinutes = 1000*60*4
  let interval = setInterval(() => {
    if(authTokens){
      updateToken()
    }
  }, fourMinutes);
  return ()=> clearInterval(interval)

 }, [authTokens, loading])
 

 return (
  <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
 );
};