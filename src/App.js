import "./App.css";
import { GlobalProvider } from "./context/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./compontents/pages/Home";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Switch>
          <Route path="/football-al" exact component={Home} />
        </Switch>
      </Router>
    </GlobalProvider>
  );
}

export default App;
