import Navbar from "./components/Navbar";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import About from "./Pages/About";

function App() {
  return (
    <>
    <Router>
      <Navbar/>

      <Switch>
        <Route exact path="/" component={About}/>
        
      </Switch>
    </Router>
    </>
  );
}

export default App;
