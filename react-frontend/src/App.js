import React from "react"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Edituser from "./Components/Edituser";
import Home from "./Components/Home";
import Viewuser from "./Components/Viewuser";

function App() {
  return (
    <div className="App">

      <Router>


        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/edituser/:id"><Edituser /></Route>
          <Route exact path="/viewuser/:id"><Viewuser /></Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
