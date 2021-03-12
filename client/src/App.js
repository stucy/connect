import { Switch, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import Friends from './containers/Friends';
import ER404 from './containers/404';
import Profile from './containers/Profile/Profile';
import ChangePass from './containers/Auth/ChangePass';
import CropImg from './containers/Profile/CropImg';
import Chat from './containers/Chat';

import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Switch>
        <Route exact path={['/', "/login"]} component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/change-password" component={ChangePass}/>
        <Route exact path="/crop-avatar" component={CropImg}/>
        <Route exact path="/chat/:id" component={Chat}/>
        <Route exact path="/friends" component={Friends} />
        <Route path="*" component={ER404} />
      </Switch>
    </AuthProvider>
  );
}

export default App;
