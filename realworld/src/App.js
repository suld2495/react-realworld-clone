import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import Headers from "./layouts/Headers";
import Join from "./pages/Join";

function App() {
    return ( 
        <BrowserRouter>
            <Headers />
            <Switch>
                <Route path = "/login" component = { LoginContainer }/> 
                <Route path = "/join" component = { Join }/> 
            </Switch > 
        </BrowserRouter> 
    );
}

export default App;