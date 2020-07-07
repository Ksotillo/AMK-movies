// React
import React, { useState, useEffect, createRef } from "react";
// Third parties
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Hooks
import useWindowSize from "../hooks/useWindowSize";
// Styles
import styles from "../css/container/Header.module.css";

const Header = ({ toggleSidebar }: { toggleSidebar: () => void }) => {
    const [ showSearch, setShowSearch ] = useState(false);
    const [ shadow, setShadow ] =useState('');
    const [ width ] = useWindowSize();
    const searchBar = createRef<HTMLInputElement>();



    const toggle = () => {
        setShowSearch((prev) => {
            if (!prev) searchBar.current?.focus()
            else searchBar.current?.blur()
            return !prev
        })
    }
    // On Mount
    useEffect(() => {
        const handleOnScroll = () => setShadow(window.scrollY > 80 ? 'shadow' : '');
        window.addEventListener('scroll', handleOnScroll);
        return () => window.removeEventListener('scroll', handleOnScroll);
    }, [])


    return (
        <header className={`header header-fixed ${shadow}`}>
            <Grid className='w-100'>
                <Row className='h-100 '>
                    <Col md={6} xs={4} className='flex items-center'>
                        {width < 992 && <FontAwesomeIcon className='mt1 ml3' icon='bars' onClick={toggleSidebar}/>}
                    </Col>
                    <Col md={6} xs={8} className='flex items-center justify-content-end'>
                        <Col mdOffset={4} md={8} xs={12} className='relative flex justify-content-end'>
                            <FontAwesomeIcon className='mt1 mr3' icon='search' onClick={toggle}/>
                            <input 
                                className={`${styles.effect} ${styles.search} ${showSearch ? styles.focus : ''}`} 
                                type='text' 
                                name='search' 
                                placeholder='Busca una película o serie'
                                ref={searchBar}
                                onBlur={() => setShowSearch(false)}
                            />
                            <span className={styles.focusBorder}></span>
                        </Col>
                    </Col>
                </Row>
            </Grid>
        </header>
    )
}

export default Header;