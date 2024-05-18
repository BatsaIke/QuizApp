import React from 'react';
import { Box } from '@mui/material';
import Header from "../Header/Header.tsx";
import Footer from "../Footer/Footer.tsx";

interface LayoutProps {
    content: React.ComponentType;  
}

const Layout: React.FC<LayoutProps> = ({ content: Content }) => {
    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
            <Header />
            <Box sx={{ flexGrow: 1 }}>
                <Content />
            </Box>
            <Footer />
        </Box>
    );
};

export default Layout;
