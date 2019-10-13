import React, {Component} from 'react';
import {firebaseConnect} from 'react-redux-firebase';
//import {compose} from 'redux';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';


class Login extends Component {
    state = {
        email: '',
        password: '',
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = e => {
        e.preventDefault();
        const {firebase} = this.props;
        const {email}=this.state;
        const {password}=this.state;

        firebase.login({
            email,
            password
        }).catch(err=>alert('niepoprawne dane logowania'));
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="text-center pd-4 pt-3">
                                <span className="text-secondary">
                                Logowanie
                                </span>
                            </h1>
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="email">Login</label>
                                    <input type="text" className="form-control"
                                           name="email"
                                           required
                                           value={this.state.email}
                                           onChange={this.onChange}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Hasło</label>
                                    <input type="password" className="form-control"
                                           name="password"
                                           required
                                           value={this.state.password}
                                           onChange={this.onChange}
                                    />
                                </div>
                                <input type="submit"
                                       value="Zaloguj"
                                       className="btn btn-outline-info"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Login.propTypes= {
    firestore: PropTypes.object.isRequired
};
export default firebaseConnect()(Login);