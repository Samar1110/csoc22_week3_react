/***
 * @todo Redirect the user to login page if token is not present.
 */

 import { useEffect} from 'react'

 import { useAuth } from '../context/auth'
 import { useRouter } from 'next/router'

 function authRequired(){
   
   const { token } = useAuth()

   const router = useRouter()

   useEffect(()=>{
   if(token===undefined){
      router.push('/login');
   }
 },[token])


 } 

 export default authRequired;


 
