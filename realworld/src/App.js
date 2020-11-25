import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import Headers from "./layouts/Headers";

function App() {
    return ( 
        <BrowserRouter>
            <Headers />
            <Switch>
                <Route path = "/login" component = { LoginContainer }/> 
            </Switch > 
        </BrowserRouter> 
    );
}

export default App;