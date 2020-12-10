import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginContainer from "./containers/LoginContainer";
import Headers from "./layouts/Headers";
import Join from "./pages/Join";
import { logout } from './modules/login';

function App({ isLogin, logout }) {
    return ( 
        <>
            <Headers isLogin={isLogin} logout={logout} />
            <Switch>
                <Route path = "/login" component = { LoginContainer }/> 
                <Route path = "/join" component = { Join }/> 
            </Switch > 
        </>
    );
}

export default connect(
    state => ({ 
        isLogin: state.login.isLogin 
    }),
    {
        logout
    }
)(App);