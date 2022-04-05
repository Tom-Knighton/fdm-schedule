import logo from './logo.svg';
import './App.css';
import { UserService } from './lib/UserService.ts';
import { UserRole } from './models/Users';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar'
import Home from './pages'
import ViewTrainer from "./pages/viewTrainer";
import './index.css'
const App = () => {

  const foundUsers = UserService.SearchByName("user");

  // Put router and navigation bar (maybe also authentication logic?) here, have pages in pages folder

  return (
      <Router>
          <Navbar />
          <Routes>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/viewTrainer" element={<ViewTrainer user={UserService.GetUserByUsername('user2')}/>}/>
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
