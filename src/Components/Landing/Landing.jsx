import React from 'react';

import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header2';
import useScrollToTop from '../../Utility/useScrollToTop';

const Landing = () => {
    useScrollToTop()

    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Landing;