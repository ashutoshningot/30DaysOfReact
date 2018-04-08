import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,Link,Switch
} from 'react-router-dom'

//1....const Home = () => (<div><h1>Welcome home</h1></div>)
const Home = () => (<div><h1>Welcome home</h1><Link to='/about'>Go to about</Link></div>)
//const Home = () => (<div><h1>Welcome home</h1><Link to='/about'>Go to about</Link></div>)
const About = ({ name }) => (<div><h1>About {name}</h1></div>)

class App extends Component {
  render() {
    return (
     //  2.....<Router>
     //    <Switch>
     //        <Route path="/about" component={About} />
     //        <Route path="/" component={Home} />
     //      </Switch>
     // </Router>
     <Router>
       <Switch>
         <Route
           path="/about"
           render={(renderProps) => (
             <div>
               <Link to='/about/akash'>akash</Link>
               <Link to='/about/kamble'>kamble</Link>
               <Route
                 path="/about/:name"
                 render={(renderProps) => (
                   <div>
                     <About name={renderProps.match.params.name} />
                     <Link to='/'>Go home</Link>
                   </div>
                 )} />
             </div>
           )} />
         <Route
           path="/"
           render={(renderProps) => (
             <div>
               Home is underneath me
               <Home {...this.props} {...renderProps} />
             </div>
           )} />
       </Switch>
     </Router>
    );
  }
}

export default App;
