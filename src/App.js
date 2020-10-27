import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { auth } from "./firebase";
import { useHistory, Switch, Route } from "react-router-dom";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import SignupSetup from "./components/SignupSetup/SignupSetup";

function App() {
  let history = useHistory();
  const [user, setUser] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        // Signed In

        if (!user.displayName) {
          return history.push("/setup");
        }
        setUser(user);
        history.push("/");
      } else {
        // Not Signed In

        console.log("Not Signed In");
        history.push("/login");
      }
    });
  }, []);

  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Home user={user} />
        </Route>
        <Route path="/login" exact component={Login} />
        <Route path="/setup" exact component={SignupSetup} />
      </Switch>
    </div>
  );
}

export default App;
