import React, { useEffect, useState } from 'react'
import { userNavigate } from "react-router-dom";
import { GetLoggedInUserDetails} from '../apicalls/users';
import { message } from 'antd';
function ProtectedRoute({children}) {
     const navigate = useNavigate();
    //  const [user, setUser] = useState(null);

    const {user} = useSelector(state=> state.users)
    const dispatch = useDispatch();

     const validateUserToken = async () => {
         try {
           const response = await GetLoggedInUserDetails(); 
           if(response.success){
                dispatch(SetUser(response.data));
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


  return (
    <div>
      {user && (
      <>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
        <h1>{user.role}</h1>
        {children}
        </>
        )}

      
    </div>
    );
  
}

export default ProtectedRoute
