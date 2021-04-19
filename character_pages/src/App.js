import './App.css';
import Home from "./pages/Home"
import TryingCharacters from "./pages/TryingCharacters"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
        <div className="App">
          <Switch>
            <Route exact path={["/", "/Home"]}>
              <Home />
            </Route>
            <Route path={"/TryingCharacters"}>
              <TryingCharacters />
            </Route>
          </Switch>
        </div>
    </Router>
  );
}

export default App;
