import logo from './logo.svg';
import './App.css';
import { UserService } from './lib/UserService.ts';
import { UserRole } from './models/Users';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './pages/index.js'
import About from "./pages/about"
import Login from "./pages/login"
import Contact from "./pages/contact";
import React from 'react';

export class ProtectedRoute extends React.Component {

    render() {
        if (!localStorage.getItem("user")) {
            return <Navigate to='/login' />
        } else {
            return this.props.children;
        }
    }
}


const App = () => {

  const foundUsers = UserService.SearchByName("user");

  // Put router and navigation bar (maybe also authentication logic?) here, have pages in pages folder

  return (
      <Router>
          <Navbar />
          <Routes>

              <Route path="/" exact element={<Home/>}/>
              <Route path="/about" element={<ProtectedRoute><About/></ProtectedRoute>}/>
              <Route path="/contact" element={<Contact/>}/>
              <Route path="/login" element={<Login/>}/>
          </Routes>

          {/*DEFAULT REACT APP*/}
{/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Users found with a 'name' containing 'user':

        </p>
        <ul>
          { foundUsers.map((u => (<li>{ u.name } : { UserRole[UserService.GetRoleOfUser(u).toString()] }</li>)))}
        </ul>
      </header>
    </div>*/}
          {/*DEFAULT REACT APP*/}
      </Router>

  );

}

export default App;
