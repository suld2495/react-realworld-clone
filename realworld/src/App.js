import { BrowserRouter, Route } from "react-router-dom";
import LoginContainer from "./containers/LoginContainer";
import Headers from "./layouts/Headers";

function App() {
  return (
    <BrowserRouter>
      <Headers />
      <Route path="/login" component={LoginContainer} />
    </BrowserRouter>
  );
}

export default App;
