import React, { useState, useEffect } from "react";
import Stack from "@mui/material/Stack";
import { Box, Typography, Paper, Autocomplete, TextField, Button } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import slide1 from '../../../assets/images/international-page/image 119.png'
import slide2 from '../../../assets/images/international-page/image 147.png'
import slide3 from '../../../assets/images/international-page/image 148.png'
import slide4 from '../../../assets/images/international-page/image 149.png'
import slide5 from '../../../assets/images/international-page/image 150.png'
import pakistan from '../../../assets/images/international-page/pk.svg'
import india from '../../../assets/images/international-page/in.svg'
import cyprus from '../../../assets/images/international-page/cy.svg'
import unitedKingdom from '../../../assets/images/international-page/gb.svg'
import unitedState from '../../../assets/images/international-page/us.svg'
import {
    containerStyles,
    sliderContainer,
    sliderStyles,
    textAreaContainer,
    textAreaHeading,
    countryLabel,
    preferenceContainer,
    preferenceText,
    selectCountryContainer,
    gotItBtn,
    selectCountryInnerTextfield,
    selectCountryTextfieldStyle,
    selectCountryDropdownStyles
} from './InternationalHomeStyles'

interface Country {
    label: string;
    code: string;
    logo: string;
}

const slides = [
    {
        id: 1,
        img: slide1
    },
    {
        id: 2,
        img: slide2
    },
    {
        id: 3,
        img: slide3
    },
    {
        id: 4,
        img: slide4
    },
    {
        id: 5,
        img: slide5
    }
];

const countries = [
    { code: "US", label: "United States", logo: unitedState },
    {
        code: "GB",
        label: "United Kingdom", logo: unitedKingdom
    },
    { code: "CY", label: "Cyprus", logo: cyprus },
    {
        code: "PK",
        label: "Pakistan",
        logo: pakistan
    },
    { code: "IN", label: "India", logo: india },

];

function InternationalHome() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedCountry, setSelectedCountry] = React.useState<Country | null>(countries[0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
        <Box sx={containerStyles}>
            <Box sx={sliderContainer}>
                {slides.map((slide, index) => (

                    <Box
                        key={index}
                        component="img"
                        src={slide.img}
                        alt={`Slide ${index + 1}`}
                        sx={sliderStyles(index, currentSlide)}
                    />

                ))}
            </Box>
            <Box sx={{ textAreaContainer, position: 'relative', height: '100%' }}>
                <Typography gutterBottom variant="h1" sx={textAreaHeading}>
                    Wosom, <br />an innovative platform
                </Typography>
                <Typography gutterBottom variant="h5" sx={countryLabel} >
                    Please select your country
                </Typography>

                <Stack spacing={1} sx={selectCountryContainer}>
                    <Autocomplete
                        id="open-on-focus"
                        value={selectedCountry}
                        options={countries}
                        getOptionLabel={(option) => option.label}
                        popupIcon={<KeyboardArrowDownIcon />}
                        disableClearable
                        onChange={(_,  newValue: any) => {
                            setSelectedCountry(newValue);
                        }}
                        PaperComponent={(props) => (
                            <Paper {...props} sx={selectCountryDropdownStyles} />
                        )}
                        renderOption={(props: any, option: any) => (
                            <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
                                {/* <img
                                    loading="lazy"
                                    width="20"
                                    srcSet={`${option.logo} 2x`}
                                    src={`${option.logo}`}
                                    alt=""
                                /> */}
                                <Box
                                    component="img"
                                    src={option.logo}
                                    alt={`flag ${option.code}`}
                                    sx={{ width: '30px' }}
                                />
                                {option.label}
                            </Box>
                        )}
                        renderInput={(params) => (
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                {selectedCountry && (
                                    // <img
                                    //     loading="lazy"
                                    //     // width="20"
                                    //     srcSet={`https://flagcdn.com/w40/${selectedCountry.code.toLowerCase()}.png 2x`}
                                    //     src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                                    //     alt=""
                                    // />
                                    <Box
                                        component="img"
                                        src={selectedCountry.logo}
                                        alt={`flag ${selectedCountry.code}`}
                                        sx={{ width: '30px' }}
                                    />
                                )}
                                <TextField
                                    {...params}
                                    inputProps={{
                                        ...params.inputProps,
                                        autoComplete: "new-password",
                                        sx: selectCountryInnerTextfield

                                    }}
                                    sx={selectCountryTextfieldStyle}
                                />
                            </Box>
                        )}
                    />
                </Stack>
                <Box sx={preferenceContainer}>
                    <Typography variant="body1" sx={preferenceText} >
                        Your preferences will be saved for future visits.
                    </Typography>

                    <Button sx={gotItBtn}>
                        Got it!
                    </Button>

                </Box>


            </Box>
        </Box>
        </Box>
    )
}

export default InternationalHome
