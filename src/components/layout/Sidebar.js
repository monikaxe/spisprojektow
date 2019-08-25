import React from 'react';
import {Link} from 'react-router-dom';

function Sidebar () {
    return (
        <div>
            <Link to="/projects/add" className="btn btn-outline-info">
                Dodaj
            </Link>
        </div>
    )
}
export default Sidebar;