import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./LoginPage";

const App = () =>{
    return(
        <>
        <Router>
            <Switch>
                <Route path="/LoginPage" exact>
                    <LoginPage />
                </Route>
            </Switch>
        </Router>
        </>
    );
}