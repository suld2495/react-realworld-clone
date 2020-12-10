import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoginContainer from "./containers/LoginContainer";
import Headers from "./layouts/Headers";
import Join from "./pages/Join";

function App({ isLogin }) {
    return ( 
        <>
            <Headers isLogin={isLogin} />
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
    })
)(App);