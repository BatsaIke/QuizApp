import { Box, Typography } from '@mui/material'
import { sectorMainContainer, sectorHeading, sectorTextStyles,mainContainer } from './SectorPageStyles'
import destinationWedding from '../../../assets/images/sector-page/image 124.png'
import weddings from '../../../assets/images/sector-page/image 122.png'
import parties from '../../../assets/images/sector-page/parties.png'
import christenings from '../../../assets/images/sector-page/christenings.png'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useState } from 'react';

function SectorPage() {
    const [isHovered, setIsHovered] = useState(false);
    const [isHoveredWeddings, setIsHoveredWeddings] = useState(false);
    const [isHoveredChristenings, setIsHoveredChristenings] = useState(false);
    const [isHoveredParties, setIsHoveredParties] = useState(false);
    return (
        <Box sx={mainContainer}>
        <Box sx={sectorMainContainer}>
            <Box sx={{ flex: 1, display: 'grid', gap: '56px', position: 'relative', justifyContent:'center',alignItems:"center" }}>
                <Box sx={sectorTextStyles}>
                    <Typography variant="h1" sx={sectorHeading}>Event planning made easier.</Typography>
                    <Typography variant="body1" sx={{
                        color: '#111',
                        fontFamily: "Lexend Deca",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '135%'
                    }}>
                        Welcome to our event planning platform! Let's make your event planning journey smoother and more personalized.
                    </Typography>
                    <Typography variant="body1" sx={{
                        color: '#111',
                        fontFamily: "Lexend Deca",
                        fontSize: '20px',
                        fontStyle: 'normal',
                        fontWeight: '400',
                        lineHeight: '135%'
                    }}>
                        Start by selecting your event type, and we'll provide the tools and resources for your event's success.
                    </Typography>
                </Box>
                <Box sx={{
                    height: '100%', overflow: 'hidden', position: 'relative', '&:hover div.overlay': {
                        opacity: 0.3,
                    }
                }}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%', height: '100%', objectFit: 'cover'
                        }}
                        alt="header logo"
                        src={destinationWedding}
                    />
                    <Box
                        className="overlay"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#000',
                            opacity: isHovered ? 0.3 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                    />
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px 15px 5px 15px', boxSizing: 'border-box', color: '#fff' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Lexend Deca', fontSize: '30px', fontWeight: '700', letterSpacing: '-0.96px', lineHeight: '43.2px' }}>
                                Destination Weddings
                            </Typography>

                            <ArrowRightAltIcon sx={{ opacity: isHovered ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ flex: 1 }}>
                <Box sx={{
                    height: '100%', overflow: 'hidden', position: 'relative', '&:hover div.overlay': {
                        opacity: 0.3,
                    }
                }}
                    onMouseEnter={() => setIsHoveredWeddings(true)}
                    onMouseLeave={() => setIsHoveredWeddings(false)}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%', height: '100%', objectFit: 'cover'
                        }}
                        alt="header logo"
                        src={weddings}
                    />
                    <Box
                        className="overlay"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#000',
                            opacity: isHoveredWeddings ? 0.3 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                    />
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px 15px 5px 15px', boxSizing: 'border-box', color: '#fff' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: "15px", alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Lexend Deca', fontSize: '30px', fontWeight: '700', letterSpacing: '-0.96px', lineHeight: '43.2px' }}>
                                Weddings
                            </Typography>

                            <ArrowRightAltIcon sx={{ opacity: isHoveredWeddings ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ flex: 1, display: 'grid', gap: '27px', position: 'relative' }}>
                <Box sx={{
                    height: '100%', overflow: 'hidden', position: 'relative', '&:hover div.overlay': {
                        opacity: 0.3,
                    }
                }}
                    onMouseEnter={() => setIsHoveredParties(true)}
                    onMouseLeave={() => setIsHoveredParties(false)}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%', height: '100%', objectFit: 'cover'
                        }}
                        alt="header logo"
                        src={parties}
                    />
                    <Box
                        className="overlay"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#000',
                            opacity: isHoveredParties ? 0.3 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                    />
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px 15px 5px 15px', boxSizing: 'border-box', color: '#fff' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: "15px", alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Lexend Deca', fontSize: '30px', fontWeight: '700', letterSpacing: '-0.96px', lineHeight: '43.2px' }}>
                                Parties
                            </Typography>

                            <ArrowRightAltIcon sx={{ opacity: isHoveredParties ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{
                    height: '100%', overflow: 'hidden', position: 'relative', '&:hover div.overlay': {
                        opacity: 0.3,
                    }
                }}
                    onMouseEnter={() => setIsHoveredChristenings(true)}
                    onMouseLeave={() => setIsHoveredChristenings(false)}>
                    <Box
                        component="img"
                        sx={{
                            width: '100%', height: '100%', objectFit: 'cover'
                        }}
                        alt="header logo"
                        src={christenings}
                    />
                    <Box
                        className="overlay"
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#000',
                            opacity: isHoveredChristenings ? 0.3 : 0,
                            transition: 'opacity 0.3s ease-in-out',
                        }}
                    />
                    <Box sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px 15px 5px 15px', boxSizing: 'border-box', color: '#fff' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: "15px", alignItems: 'center' }}>
                            <Typography variant="body1" sx={{ fontFamily: 'Lexend Deca', fontSize: '30px', fontWeight: '700', letterSpacing: '-0.96px', lineHeight: '43.2px' }}>
                                Christenings
                            </Typography>

                            <ArrowRightAltIcon sx={{ opacity: isHoveredChristenings ? 1 : 0, transition: 'opacity 0.3s ease-in-out' }} />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
        </Box>
    )
}

export default SectorPage