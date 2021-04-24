import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import "./Assets/SCSS/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import AddEvent from "./Pages/AddEvent";
import Dashboard from "./Pages/Dashboard";

const client = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={client}>
      <Router>
        <div className="">
          <Navbar />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/add-event" component={AddEvent} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
