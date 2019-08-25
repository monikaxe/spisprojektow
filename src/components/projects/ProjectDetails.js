import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {firestoreConnect} from "react-redux-firebase";



class ProjectDetails extends Component {
        onDeleteClick = () =>{
            const {project, firestore}=this.props;
            firestore.delete({collection: 'projects', doc:project.id})
                .then(()=> this.props.history.push('/'));

    };
    render() {
        const {project}= this.props;
        if(project){
            return (
                <div>
                    <div className="row">
                        <div className="col-md-4">
                            <Link to="/" className="btn btn-link">
                                <i className="fas.fa-arrow-circle-left"/>Powrót do projektów
                            </Link>
                        </div>
                        <div className="col-md-4">
                            <div className="btn-group float-right">
                                <Link to={'/project/edit/${project.id}'} className="btn btn-outline-info">
                                    Edytuj
                                </Link>
                            </div>
                            <div className="btn-group float-right">
                                <button onClick={this.onDeleteClick} className="btn btn-outline-danger">
                                    Usuń
                                </button>
                        </div>
                        </div>
                    </div>
                <hr/>
                    <div className="card">
                        <h3 className="card-header">
                            {project.title}
                        </h3>
                            <div className="card-body">
                                <ul className="list-group">
                                    <li className="list-group-item"> Opis: {project.description}</li>
                                    <li className="list-group-item"> Autorzy: {project.authors}</li>
                                </ul>
                            </div>
                    </div>
                </div>

            );
        } else {
            return (
                <div>
                    Czekaj
                </div>
            );

        }
}
}

ProjectDetails.propTypes= {
    firestore: PropTypes.object.isRequired,
};

export default compose(
    firestoreConnect(props=>[
        {collection:'projects', storeAs:'project', doc: props.match.params.id}
    ]),
    connect(({firestore:{ordered}}, props)=>({
        project: ordered.project && ordered.project[0]}))
)(ProjectDetails);