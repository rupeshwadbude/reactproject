import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Homepage from './HomePage'
import {BrowserRouter as Router,Route, Switch } from 'react-router-dom';
import Logout from './Logout'
import Register from './Register';
import Home from './Home';
import EmployeeList from './EmployeeList';
import Updatevalue from './Update'

function App() {
  return (
    <div className="App">
    <Router>
      <div>
      <Switch>
      <Route  path='/home' component = {Home}></Route>
        <Route exact path='/'  component={Login}></Route>
        <Route exact path='/homepage'  component={Homepage}></Route>
        <Route  path='/logout' component={Logout}></Route>
        <Route  path='/register' component={Register}></Route>
        <Route  path='/emplyeelist' component={EmployeeList}></Route>
        <Route path='/update' component={Updatevalue} ></Route>
          
      </Switch>
      </div>
      
    </Router>
    
      
      

          
    </div>
  );
}

export default App;
