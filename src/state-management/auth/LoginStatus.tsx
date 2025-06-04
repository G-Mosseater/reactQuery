import { useContext, useReducer, useState } from "react";
// import authReducer from "./auth/authReducer";
// import AuthContext from "./contexts/authContext";
import useAuth from "./useAuth";
import useAuthStore from "./store";

const LoginStatus = () => {


//  const {user,dispatch} = useAuth()

const{user, login,logout} = useAuthStore()

  if (user)
    return (
      <>
        <div>
          <span className="mx-2">{user}</span>
          <a onClick={() => logout()} href="#">
            Logout
          </a>
        </div>
      </>
    );
  return (
    <div>
      <a onClick={()=>login('Jim Pump')} href="#">
        Login
      </a>
    </div>
  );
};

export default LoginStatus;
