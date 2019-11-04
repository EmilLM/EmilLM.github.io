import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    BrowserRouter,
    NavLink,
} from 'react-router-dom';
import FormMain from "./FormMain.jsx";
import Home from "./Home.jsx";
import NotFound from "./NotFound.jsx";

document.addEventListener('DOMContentLoaded', ()=>{


class App extends React.Component{
    render() {
        return (
            <HashRouter>
                {/*<MenuLogo/>*/}
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/contact' component={FormMain}/>
                    <Route component={NotFound}/>
                </Switch>
            </HashRouter>
        )
    }
}

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
});