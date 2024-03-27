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