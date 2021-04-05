import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import qoreContext, { client } from "./qoreContext.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Main from "./pages/Main.js";
import Register from "./pages/Register.js";
import Login from "./pages/Login.js";
import Cookies from "js-cookie";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = qoreContext.useCurrentUser();
  useEffect(
    function () {
      setCurrentUser(user);
    },
    [user]
  );
  function handleLogout(e) {
    Cookies.remove("token");
    setCurrentUser(null);
  }

  async function handleLogin(email, password) {
    const token = await client.authenticate(email, password);
    console.log(token);
    Cookies.set("token", token);
    setCurrentUser(user);
  }

  return (
    <Router>
      <Header user={currentUser} handleLogout={handleLogout} />
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login">
          <Login handleLogin={handleLogin} />
        </Route>
        <Route path="/">
          <Main user={currentUser} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
