import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Interior from "./Pages/Interior";
import Exterior from "./Pages/Exterior";
import Contact from "./Pages/Contact";
import classes from "./App.module.scss";
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <div className={classes.pages}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/interior" component={Interior}/>
        <Route exact path="/exterior" component={Exterior}/>
        <Route exact path="/contact" component={Contact}/>
      </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
