/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import {useContext} from "react"
import AuthContext from '../context/AuthContext';

const PrivateRoute = ({children}) => {
 const router = useRouter();
 const {user} = useContext(AuthContext)

 useEffect(() => {
  if (!user) {
   router.push('/login');
  }
 }, []);
 return <>{!user ? null : children}</>;
};

export default PrivateRoute;
