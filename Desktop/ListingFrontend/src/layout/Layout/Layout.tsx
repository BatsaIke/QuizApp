import React from 'react';
import { Box } from '@mui/material';
import Header from "../Header/Header.tsx";

interface LayoutProps {
    content: React.ComponentType;  
    footer: React.ComponentType;  
}

const Layout: React.FC<LayoutProps> = ({ content: Content, footer: Footer }) => {
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
