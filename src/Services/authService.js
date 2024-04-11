import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";        

// saveUser
export const saveLoggedInUser = (inputs, role) => {
    sessionStorage.setItem('authenticatUser', inputs)
    sessionStorage.setItem("userRole", role)
}

// check User Logged in?
export const isLoggedIn = () => {
    const username = sessionStorage.getItem('authenticatUser')
   
    if(username == null){
        return false;
    }
    else{
        return true;
    }
}

//get user role
export const getUserRole = () => {
    const userRole = sessionStorage.getItem('userRole');
    return userRole;
  };
//get Logged in user
export const getLoggedInUser = () => {
    const username = sessionStorage.getItem('authenticatUser')
    return username;
}

//logout
export const logoutUser = () => {
    localStorage.clear();
    sessionStorage.clear();
}

