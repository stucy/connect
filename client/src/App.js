import { Switch, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Login from './containers/Login';
import Register from './containers/Register';
import Friends from './containers/Friends';
import ER404 from './containers/404';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path={['/', "/login"]} component={Login}/>
        <Route exact path="/register" component={Register}/>
        <PrivateRoute exact path="/friends" component={Friends} />
        <Route path="/" component={ER404} />
      </Switch>
    </AuthProvider>
  );
}

export default App;