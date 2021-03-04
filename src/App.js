import { Switch, Route } from "react-router-dom";
import Hello from "./components/hello/hello";

import ReactTest from "./pages/react-test/react-test";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={() => <Hello user="human" />} />
        <Route exact path="/aleph-react-test" component={ReactTest} />
      </Switch>
    </div>
  );
}

export default App;
