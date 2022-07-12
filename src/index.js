import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./pages/App";
import { store } from "./redux";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import { history } from "./redux/reducers";
import { ConnectedRouter } from "connected-react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/blog" exact>
            <Blog />
          </Route>
          <Route path="*" exact>
            <NotFound />
          </Route>
        </Switch>
      </ConnectedRouter>
    </Provider>
);
