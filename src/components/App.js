import React from 'react';
import MainPage from "./MainPage";
import { Route, Switch } from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
