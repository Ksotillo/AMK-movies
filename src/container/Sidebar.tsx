// React
import React from "react";
// Third parties
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Styles
import styles from "../css/container/Sidebar.module.css";

const Sidebar = ({ opened }: { opened: boolean }) => {
    return (
        <div className={`sidebar sidebar-dark sidebar-lg-show sidebar-fixed ${opened ? 'sidebar-show' : ''}`}>
            <ul className='sidebar-nav h-100'>
                <a className={`sidebar-brand ${styles.titleBrand}`} href='/'>
                    AMK Movies
                </a>
                {[1, 2, 3, 4, 5].map((v, index) => 
                    <li className='sidebar-nav-item' key={index}>
                        <a className='sidebar-nav-link'>
                            <FontAwesomeIcon className='mr3' icon='video' />
                            {v}
                        </a>
                    </li>
                )

                }
            </ul>
        </div>
    )
}

export default Sidebar;