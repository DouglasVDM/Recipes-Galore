import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';


const AuthButton = () => {
  const clientId = "166169580900-ul4a6ju75s75np2ue8h9i44vtl08b5j8.apps.googleusercontent.com";

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginSuccessHandler = (res) => {
    console.log("Login successful, Current user: ", res.profileObj);
    setIsAuthenticated(true);
  };

  const logoutSuccessHandler = () => {
    console.log("Logout successful");
    setIsAuthenticated(false);
  };

  const loginFailureHandler = (res) => {
    console.log("Login failed, res: ", res);
  };

  return (
    <div className='auth-button-container'>
      {isAuthenticated ? (
        <GoogleLogout
          clientId={clientId} 
          buttonText="Logout"
          onLogoutSuccess={logoutSuccessHandler}
        />
      ) : (
        <GoogleLogin
          clientId={clientId}
          buttonText="Login with Google"
          onSuccess={loginSuccessHandler}
          onFailure={loginFailureHandler}
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
        />
      )}
    </div>
  );
};

export default AuthButton;
