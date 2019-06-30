import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Projects extends Component {
    render() {
        const {projects}=this.props;
            return (
                <div className="row">
                    <div className="col-md-6">
                        <h2>
                            {' '}
                        </h2>
                    </div>
                    <table className="table table-striped">
                        <thead className="thread-inverse">
                            <tr>
                                <th>Tytuł</th>
                                <th>Opis</th>
                                <th>Autor</th>
                                {/*<th>Kontakt</th>*/}
                                {/*<th>data rozpoczęcia</th>*/}
                                {/*<th>data zakończenia</th>*/}
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map(project => (
                                <tr key={project.id}>
                                    <td>{project.title}</td>
                                    <td>{project.description}</td>
                                    <td>{project.author}</td>
                                    <td>
                                        <Link to={`/project/${project.id}`}
                                              className="btn btn-secondary btn-sm">
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
    }
}
Projects.propTypes={
    firestore: PropTypes.object.isRequired,
    projects:PropTypes.array
};

export default compose(
    firestoreConnect([{collection:'projects'}]),
    connect((state, props)=>({
        projects: state.firestore.ordered.projects}))
)(Projects);