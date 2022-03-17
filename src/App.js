import logo from './logo.svg';
import './App.css';
import { UserService } from './lib/UserService.ts';
import { UserRole } from './models/Users';

const App = () => {

  const foundUsers = UserService.SearchByName("user");

  // Put router and navigation bar (maybe also authentication logic?) here, have pages in pages folder
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Users found with a 'name' containing 'user':
        </p>
        <ul>
          { foundUsers.map((u => (<li>{ u.name } : { UserRole[UserService.GetRoleOfUser(u).toString()] }</li>)))}
        </ul>
      </header>
    </div>
  );
}

export default App;
