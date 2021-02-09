import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages";
import { ROUTES } from "./constants";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
