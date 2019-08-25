import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {firestoreConnect} from "react-redux-firebase";


class EditProject extends Component {
    constructor(props){
        super(props);
            this.authorsInput=React.createRef();
            this.titleInput=React.createRef();
            this.descriptionInput=React.createRef();
        }

        onSubmit= e => {
        e.preventDefault();
        const {project, firestore, history}=this.props;
        const updateProject={
            authors: this.authorsInput.current.value,
            title: this.titleInput.current.value,
            description: this.descriptionInput.current.value,
        }

        firestore.update({collection: 'projects', doc:project.id}, updateProject)
            .then(history.push('/'));
    }
    render() {
        const {project}=this.props;

        if(project) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/" className="btn btn-link">
                                Powrót do projektów
                            </Link>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-header">
                            Edytuj projekt
                        </div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <label htmlFor="authors">Autorzy</label>
                                    <input type="text"
                                           className="form-control"
                                           authors="authors"
                                           minLength="2"
                                           required
                                           ref={this.authorsInput}
                                           defaultValue={project.authors}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="title">Tytuł</label>
                                    <input type="text"
                                           className="form-control"
                                           title="title"
                                           minLength="2"
                                           required
                                           ref={this.titleInput}
                                           defaultValue={project.title}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="description">Opis</label>
                                    <input type="text"
                                           className="form-control"
                                           description="description"
                                           minLength="2"
                                           ref={this.descriptionInput}
                                           defaultValue={project.description}
                                    />
                                </div>
                                <input type="submit" value="Zapisz" className="btn btn-outline-info"/>
                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>Czekaj</div>
            );
        }
    }
}

EditProject.propTypes= {
    firestore: PropTypes.object.isRequired
};

export default compose(
    firestoreConnect(props=>[
        {collection:'projects', storeAs:'project', doc: props.match.params.id}
    ]),
    connect(({firestore:{ordered}}, props)=>({
        project: ordered.project && ordered.project[0]}))
)(EditProject);