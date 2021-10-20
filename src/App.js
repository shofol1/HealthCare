import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Header from "./Components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contact from "./Components/Contact/Contact";
import Trainers from "./Components/Trainers/Trainers";
import Footer from "./Components/Footer/Footer";
import Classes from "./Components/Classes/Classes";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NotFound from "./Components/NotFound/NotFound";
import Register from "./Components/Contact/Register";
import Plans from "./Plans/Plans";
import Service from "./Components/Service/Service";

function App() {
  return (
    <div className="bg">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/services/:id">
              <Service></Service>
            </PrivateRoute>
            <Route exact path="/contact">
              <Contact></Contact>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/trainers">
              <Trainers></Trainers>
            </Route>
            <PrivateRoute exact path="/classes">
              <Classes></Classes>
            </PrivateRoute>
            <PrivateRoute exact path="/plans">
              <Plans></Plans>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
