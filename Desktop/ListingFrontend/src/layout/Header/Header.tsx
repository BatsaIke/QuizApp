import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import headerLogoUrl from '../../assets/images/header/wosom-logo-black.png';
import headerSearchIcon from '../../assets/images/header/wosom-search-icon-header.png';
import headerProIcon from '../../assets/images/header/wosom-pro-icon-header.png';
import headerMenuIcon from '../../assets/images/header/wosom-menu-icon-header.png';
import headerDropdownIcon from '../../assets/images/header/wosom-dropdownIcon-header.png';

interface HeaderIcon {
    logo: string;
    alt: string;
}

const pages: string[] = ['VENDORS', 'IDEAS'];
const settings: string[] = ['Profile', 'Account', 'Dashboard', 'Logout'];
const headerIcons: HeaderIcon[] = [{ 'logo': headerSearchIcon, 'alt': "header search logo" }, { 'logo': headerProIcon, 'alt': "header pro logo" }, { 'logo': headerMenuIcon, 'alt': "header pro logo" }, { 'logo': headerDropdownIcon, 'alt': "header pro logo" }];

function Header() {
    // const [anchorElNav, setAnchorElNav] = React.useState<HTMLElement | null>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);


    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (page: string) => {
        console.log(page);

        // setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="transparent" sx={{ boxShadow: '0px 0px 10px 0px #0000001A' }}>
            <Container maxWidth="xl">
                <Toolbar sx={{ minHeight: { lg: '50px', xl: '64px' } }} disableGutters>
                    <Link to="/">

                        <Box sx={{ display: { xs: 'flex' }, mr: 1 }}>
                            <Box
                                component="img"
                                sx={{
                                    width: '100%', height: '100%',
                                    maxHeight: { xs: 233, md: 167 },
                                    maxWidth: { xs: 350, md: 250 },
                                }}
                                alt="header logo"
                                src={headerLogoUrl}
                            />
                        </Box>
                    </Link>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: { xl: 2, lg: 0 }, color: '#111111', display: 'block', fontWeight: 600, fontSize: 13, fontFamily: 'Lexend Deca' }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>

                        {/* {headerIcons.map((val,index) =>
                                <Button
                                    key={index}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: '#111111', display: 'block', fontWeight: 600, fontSize: 13, fontFamily: 'Lexend Deca' }}
                                >
                                    <Box
                                        component="img"
                                        sx={{
                                            width: '100%', height: '100%', mx: 1
                                        }}
                                        alt={val.alt}
                                        src={val.logo}
                                    />
                                </Button>
                            )} */}


                        {/* <Tooltip title="Open settings"> */}

                        {headerIcons.map((val, index) =>
                            <IconButton key={index} onClick={handleOpenUserMenu} sx={{ m: '0px 5px' }}>
                                <img alt={val.alt} src={val.logo} />
                            </IconButton>
                        )}

                        {/* </Tooltip> */}

                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default Header;
