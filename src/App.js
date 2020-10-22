import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyDrawer from './components/MyDrawer'
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
const useStyles = makeStyles((theme) =>( {
  drawerPaper: { width: "inherit" }

}))

function App() {

  const classes = useStyles();
  return (
    
      
      <div>
        <MyDrawer/>
        <Switch>
          <Route exact from ="/" render ={props => <Home{...props}/>}/>
          <Route exact path ="/contact" render ={props => <Contact{...props}/>}/>
          <Route exact path ="/about" render ={props => <About{...props}/>}/>
          <Route exact path ="/resume" render ={props => <Resume{...props}/>}/>
          <Route exact path ="/projects" render ={props => <Projects{...props}/>}/>

        </Switch>
      
      </div>
    
  );
}

export default App;
