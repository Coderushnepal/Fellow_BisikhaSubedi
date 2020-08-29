import React from "react";
import { Route } from "react-router-dom";
import izitoast from "izitoast";

const PrivateRoute = (props) => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const handleLogIn = () => {
    setIsLoggedIn(true);

    izitoast.show({
      title: "yayy",
    });
  };
  if (isLoggedIn) {
    return <Route {...props} />;
  }

  return (
    <div>
      Please Log In,{" "}
      <button onClick={handleLogIn} className="btn-primary">
        Click to login
      </button>
    </div>
  );
};

export default PrivateRoute;
