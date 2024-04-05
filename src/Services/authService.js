import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";        

// saveUser
export const saveLoggedInUser = (inputs) => {
    sessionStorage.setItem('authenticatUser', inputs)
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

//Decide Role
export const decideRole = () => {
    let loginData = JSON.parse(localStorage.getItem('token'));
    console.log(loginData);
    try {
        if (loginData && loginData.role === 'ADMIN') {
            return {
                auth: true,
                user: 'ADMIN'
            };
        } else if (loginData && (loginData.role === 'hr' || loginData.role === 'EMPLOYEE')) {
            return {
                auth: true,
                user: 'EMPLOYEE'
            };
        } else {
            return {
                auth: false,
                user: null
            };
        }
    } catch (error) {
        console.log(error);
    }
};
export const PrivateRoutes = () => {
    const { user, auth } = decideRole();
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth || user !== 'ADMIN') {
            navigate('/');
        }
    }, [user, auth, navigate]);

    return (
        <div>
            <Outlet />
        </div>
    );
};

export const PublicRoutes = () => {
    const { user, auth } = decideRole();
    const navigate = useNavigate();
    useEffect(() => {
        if (!auth || user !== 'EMPLOYEE') {
            navigate('/');
        }
    }, [user, auth, navigate]);

    return (
        <div>
            <Outlet />
        </div>
    );
};
