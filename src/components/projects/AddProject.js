import React from 'react';
import {Component} from 'react';
import {Link} from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase';
import PropTypes from "prop-types";

class AddProject extends Component {
    state={
        authors:'',
        title:'',
        description:''
    };

    onSubmit= e => {
        e.preventDefault();

        const newProject=this.state;
        const {firestore, history}=this.props;
        firestore
            .add({collection:'projects'}, newProject)
            .then(()=> history.push('/'));
    };

    onChange= e =>this.setState({[e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Link to="/" className="btn btn-link">
                            Powrót do projektów
                        </Link>
                    </div>
                </div>

                <div className="card">
                    <div className="card-header">
                        Dodaj projekt
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="authors">Autorzy</label>
                                <input type="text"
                                       className="form-control"
                                       name="authors"
                                       minLength="2"
                                       required
                                       onChange={this.onChange}
                                       value={this.state.authors}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="title">Tytuł</label>
                                <input type="text"
                                       className="form-control"
                                       name="title"
                                       minLength="2"
                                       required
                                       onChange={this.onChange}
                                       value={this.state.title}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Opis</label>
                                <input type="text"
                                       className="form-control"
                                       name="description"
                                       minLength="2"
                                       onChange={this.onChange}
                                       value={this.state.description}
                                />
                            </div>
                            <input type="submit" value="Zapisz" className="btn btn-primary btn-block"/>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
AddProject.propTypes= {
    firestore: PropTypes.object.isRequired,
};

export default firestoreConnect()(AddProject);