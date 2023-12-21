import React, { useEffect, useState } from 'react'
import { userNavigate } from "react-router-dom";
import { GetLoggedInUserDetails, GetUserDetails } from '../apicalls/users';
import { message } from 'antd';
function ProtectedRoute({children}) {
     const navigate = useNavigate();
     const [user, setUser] = useState(null);

     const validateUserToken = async () => {
         try {
           const response = await GetLoggedInUserDetails(); 
           if(response.success){
                setUser(response.data)
           }else{
            message.error(response.message);
           }
         } catch (error) {
           message.error(error.message);
         }

     }

   useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
        navigate("/login");
    }else{
        validateUserToken();
    }
   }, [])


  return 
    <div>
      {user && children}
    </div>;
  
}

export default ProtectedRoute
