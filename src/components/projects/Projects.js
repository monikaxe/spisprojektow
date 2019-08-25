import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {compose} from 'redux';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {firestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';

class Projects extends Component {
    render() {
        const {projects}=this.props;

        const projectsList = !isLoaded(projects)
            ? 'Loading'
            : isEmpty(projects)
                ? 'Todo list is empty'
                : projects.map((project) => (
                    <tr key={project.id}>
                        <td>{project.title}</td>
                        <td>{project.description}</td>
                        <td>{project.authors}</td>
                        <td>
                            <Link to={`/project/${project.id}`}
                                  className="btn btn-secondary btn-sm">
                                Podgląd
                            </Link>
                        </td>
                    </tr>
                ));


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
                        <th>Autorzy</th>
                        {/*<th>Kontakt</th>*/}
                        {/*<th>data rozpoczęcia</th>*/}
                        {/*<th>data zakończenia</th>*/}
                    </tr>
                    </thead>
                    <tbody>

                    {projectsList}

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