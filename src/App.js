import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
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
                                <Route exact path="/" component={Dashboard}/>
                                <Route exact path="/project/add" component={AddProject}/>
                                <Route exact path="/project/:id" component={ProjectDetails}/>
                                <Route exact path="/project/edit/:id" component={EditProject}/>
                            </Switch>
                        </div>

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
