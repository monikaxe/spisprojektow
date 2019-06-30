import React from 'react';
import Sidebar from './Sidebar';
import Projects from '../projects/Projects';

function Dashboard () {
    return (

        <div className="row">
            <div className="col-md-10">
                 <Projects/>
            </div>
            <div className="col-md-2">
                 <Sidebar/>
            </div>
        </div>
    )
}
export default Dashboard;