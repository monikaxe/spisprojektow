import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth'
import './App.css';
import Login from './components/auth/Login'
import ProjectDetails from './components/projects/ProjectDetails'
import AddProject from './components/projects/AddProject'
import EditProject from './components/projects/EditProject'
import Dashboard from './components/layout/Dashboard'
import NavBar from './components/layout/NavBar'
import {Provider} from 'react-redux';
import store from './store';


class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="App">
                        <NavBar/>
                        <div className="container">
                            <Switch>
                                <Route exact path="/" component={UserIsAuthenticated(Dashboard)}/>
                                <Route exact path="/project/add" component={UserIsAuthenticated(AddProject)}/>
                                <Route exact path="/project/:id" component={UserIsAuthenticated(ProjectDetails)}/>
                                <Route exact path="/project/edit/:id" component={UserIsAuthenticated(EditProject)}/>
                                <Route exact path="/login" component={UserIsNotAuthenticated(Login)}/>
                            </Switch>
                        </div>

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
