import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import CounterApp from './CounterApp';
import Sideber from './Sidebar';
import Slide from './Slide';
import './App.css';

function App(){
  return (
    <div className="App">

    </div>
  )
}

export default App;

// const App = () => {
//   return (
//     <Route>
//       <Sideber />
//       {/* <Route path="/slide" component={Slide} />
//       <Route path="/counterapp" component={CounterApp} /> */}
//       <Redirect from="/" to="/slide" />
//     </Route>
//   );
// }
