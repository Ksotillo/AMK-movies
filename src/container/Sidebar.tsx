// React
import React from "react";
// Third parties
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Routes
import routes from "../routes/routes";
import {  useLocation, Link } from "react-router-dom"
// Styles
import styles from "../css/container/Sidebar.module.css";

const Sidebar = ({ opened, setOpened }: { opened: boolean, setOpened: (value: boolean) => void }) => {
    const location = useLocation();
    return (
        <div className={`sidebar sidebar-dark sidebar-lg-show sidebar-fixed ${opened ? 'sidebar-show' : ''}`}>
            <ul className='sidebar-nav h-100'>
                <Link className={`sidebar-brand ${styles.titleBrand}`} to='/' onClick={() => setOpened(false)}>
                    AMK Movies
                </Link>
                {routes.map((component, index: number) =>
                    component.isInSidebar ?
                    <li className='sidebar-nav-item' key={index}>
                        <Link
                            className={`sidebar-nav-link ${location.pathname === component.path ? 'active' : ''}`}
                            to={component.path}
                            onClick={() => setOpened(false)}
                        >
                            <FontAwesomeIcon className='mr3' icon={component.icon} />
                            {component.name}
                        </Link>
                    </li>
                    :
                    null
                )

                }
            </ul>
        </div>
    )
}

export default React.memo(Sidebar);