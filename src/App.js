import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
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
                            </Switch>
                        </div>

                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
