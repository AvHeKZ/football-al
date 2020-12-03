import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./compontents/pages/Home";
import Head2Head from "./compontents/pages/Head2Head";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/football-al" exact component={Home} />
          <Route path="/h2h/:Team1/:Team2" exact component={Head2Head} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
