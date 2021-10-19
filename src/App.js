import './App.css';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import TheClub from './Components/TheClub/TheClub';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Service from './Components/Services/Service';
import Trainers from './Components/Trainers/Trainers';
import Footer from './Components/Footer/Footer';
import Classes from './Components/Classes/Classes';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NotFound from './Components/NotFound/NotFound';
import Register from './Components/Contact/Register';

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route  path="/home">
          <Home></Home>
          </Route>
          <Route path="/theclub">
          <TheClub></TheClub>
          </Route>
          <Route exact path="/services/:id">
          <Service></Service>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="/trainers">
            <Trainers></Trainers>
          </Route>
          <PrivateRoute path="/classes">
            <Classes></Classes>
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
