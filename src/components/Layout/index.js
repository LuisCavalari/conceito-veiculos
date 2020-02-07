import React from 'react';

import Header from '../Header';
import Footer from '../Footer'
import { Globals } from "../../../styles/global";
export default function Layout({ children }) {
    return (
        <>
            <Globals />
            <Header />
                {children}
            <Footer />
        </>
    );
}
