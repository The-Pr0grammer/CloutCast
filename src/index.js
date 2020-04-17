import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";

import { browserHistory } from "react-router";
import {
  BrowserRouter as Router,
  StaticRouter, // for server rendering
  Route,
  Link,
} from "react-router-dom";

// const Root = () => {
//   return (
//     <div className="container">
//       <Router history={browserHistory}>
//         <Route path="/" component={Display} />
//         <Route path="/upload" component={Upload} onEnter={requireAuth} />
//         <Route path="/callback" component={Callback} />
//       </Router>
//     </div>
//   );
// };

ReactDOM.render(<App />, document.getElementById("root"));
//
