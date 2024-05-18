import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider, Theme, useTheme } from '@mui/material/styles';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import ClipSvgIcon from '../../../../assets/images/report-to-wosom/ClipSvgIcon';

// type Media = null | { name: string };

export default function ReportToWosom() {
    const hiddenFileInput = React.useRef<HTMLInputElement | null>(null);
    const [media, setMedia] = React.useState<File | null>(null);


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const fileUploaded = event.target.files?.[0] || null;
        setMedia(fileUploaded);
    };

    const handleClick = () => {
        hiddenFileInput?.current?.click();
    };
    const outerTheme = useTheme();
    const customTheme = (outerTheme: Theme) =>
        createTheme({
            palette: {
                mode: outerTheme.palette.mode,
            },
            components: {
                MuiTextField: {
                    styleOverrides: {
                        root: {
                            '--TextField-brandBorderColor': '#E0E3E7',
                            '--TextField-brandBorderHoverColor': '#B2BAC2',
                            '--TextField-brandBorderFocusedColor': '#A9A9A9',
                            '& label.Mui-focused': {
                                color: 'var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
                MuiOutlinedInput: {
                    styleOverrides: {
                        notchedOutline: {
                            borderColor: 'var(--TextField-brandBorderColor)',
                        },
                        root: {
                            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: 'var(--TextField-brandBorderHoverColor)',
                            },
                            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
                                borderColor: 'var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
                MuiFilledInput: {
                    styleOverrides: {
                        root: {
                            '&::before, &::after': {
                                borderBottom: '1px solid var(--TextField-brandBorderColor)',
                            },
                            '&:hover:not(.Mui-disabled, .Mui-error):before': {
                                borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
                            },
                            '&.Mui-focused:after': {
                                borderBottom: '1px solid var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
                MuiInput: {
                    styleOverrides: {
                        root: {
                            '&::before': {
                                borderBottom: '1px solid var(--TextField-brandBorderColor)',
                            },
                            '&:hover:not(.Mui-disabled, .Mui-error):before': {
                                borderBottom: '1px solid var(--TextField-brandBorderHoverColor)',
                            },
                            '&.Mui-focused:after': {
                                borderBottom: '1px solid var(--TextField-brandBorderFocusedColor)',
                            },
                        },
                    },
                },
            },
        });

    const currencies = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ];

    return (
        <Card sx={{ minWidth: 581, boxShadow: '0px 4px 18px 0px rgba(0, 0, 0, 0.15)' }}>
            <CardContent>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: { xl: '24px', lg: '10px' } }}>
                    <Typography gutterBottom variant="h5" component="div" color='#212121' fontFamily='Lexend Deca' sx={{ fontSize: { xl: '25px', xs: '22px' } }} fontWeight={600} letterSpacing='1px'>
                        Share your thoughts on Wosom!
                    </Typography>
                    <Typography variant="body2" color="#A9A9A9" fontFamily='Lexend Deca' sx={{ fontSize: { xl: '15px', xs: '12px' } }} fontWeight={400} fontStyle='normal'>
                        Your feedback matters.
                    </Typography>
                    <Typography variant="body2" color="#A9A9A9" fontFamily='Lexend Deca' sx={{ fontSize: { xl: '15px', xs: '12px' } }} fontWeight={400} fontStyle='normal'>
                        Help us fix any glitches and make your experience top-notch
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        // gridTemplateColumns: { sm: '1fr' },
                        gap: { xs: '5px', lg: '7px', xl: '24px' },
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}

                >
                    <ThemeProvider theme={customTheme(outerTheme)}>
                        <TextField
                            id="outlined-password-input"
                            label="Your Name"
                            type="text"
                            autoComplete="current-password"
                            required
                            sx={{
                                '& .MuiInputLabel-root': { fontSize: '12px', fontFamily: 'Lexend Deca', fontWeight: '400', lineHeight: '18px', color: '#A9A9A9', marginTop: { xl: '5px', xs: '2px' } }, // Target label element
                                '& .MuiInputBase-root': { borderRadius: '12px', width: '396px', height: { xl: '45px', xs: '40px' }, flexShrink: 0 },
                                '& .MuiInputLabel-asterisk': { color: 'red' },
                            }}
                            size='small'
                        />

                        <TextField
                            id="outlined-password-input"
                            label="Email Address"
                            type="text"
                            autoComplete="current-password"
                            required
                            sx={{
                                '& .MuiInputLabel-root': { fontSize: '12px', fontFamily: 'Lexend Deca', fontWeight: '400', lineHeight: '18px', color: '#A9A9A9', marginTop: { xl: '5px', xs: '2px' } }, // Target label element
                                '& .MuiInputBase-root': { borderRadius: '12px', width: '396px', height: { xl: '45px', xs: '40px' }, flexShrink: 0 },
                                '& .MuiInputLabel-asterisk': { color: 'red' },
                            }}
                            size='small'
                        />

                        <TextField
                            id="outlined-password-input"
                            label="Subject"
                            type="text"
                            autoComplete="current-password"
                            sx={{
                                '& .MuiInputLabel-root': { fontSize: '12px', fontFamily: 'Lexend Deca', fontWeight: '400', lineHeight: '18px', color: '#A9A9A9', marginTop: { xl: '5px', xs: '2px' } }, // Target label element
                                '& .MuiInputBase-root': { borderRadius: '12px', width: '396px', height: { xl: '45px', xs: '40px' }, flexShrink: 0 },
                                '& .MuiInputLabel-asterisk': { color: 'red' },
                            }}
                            size='small'
                        />

                        <TextField
                            id="outlined-select-currency"
                            select
                            label="Please Select"
                            required
                            sx={{
                                '& .MuiInputLabel-root': { fontSize: '12px', fontFamily: 'Lexend Deca', fontWeight: '400', lineHeight: '18px', color: '#A9A9A9', marginTop: { xl: '5px', xs: '2px' } }, // Target label element
                                '& .MuiInputBase-root': { borderRadius: '12px', width: '396px', height: { xl: '45px', xs: '40px' }, flexShrink: 0 },
                                '& .MuiInputLabel-asterisk': { color: 'red' },
                            }}
                            size='small'
                        >
                            {currencies.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>

                        <TextField
                            id="outlined-multiline-static"
                            label="Type here"
                            type="text"
                            sx={{
                                '& .MuiInputLabel-root': { fontSize: '12px', fontFamily: 'Lexend Deca', fontWeight: '400', lineHeight: '18px', color: '#A9A9A9', marginTop: '5px' }, // Target label element
                                '& .MuiInputBase-root': { borderRadius: '12px', width: '396px', flexShrink: 0 }
                            }}
                            size='small'
                            multiline
                            rows={4}
                        />

                        <Box
                            sx={{ borderRadius: '12px', padding: '12px 14px 11px 14px', cursor: 'pointer', marginBottom: { xl: '25px', lg: '0px' } }}
                            border={'1px solid #E0E3E7'}
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            onClick={handleClick}
                        >
                            <Typography sx={{ color: '#A9A9A9', fontSize: '12px', fontFamily: 'Lexend Deca', fontWeight: '400' }}>{media ? media?.name : 'Add a screenshot or video (recomemded)'}</Typography>

                            <ClipSvgIcon />
                            <input
                                type="file"
                                onChange={handleImageChange}
                                ref={hiddenFileInput}
                                style={{ display: 'none' }} // Make the file input element invisible
                            />
                        </Box>


                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
                            <Typography sx={{ color: '#A9A9A9', fontSize: { xl: '15px', lg: '12px' }, fontFamily: 'Lexend Deca', fontWeight: '400', fontStyle: 'normal' }}>
                                Need Help solving a specific issue?
                            </Typography>

                            <Typography
                                variant="body1"
                                component="a"
                                target="_blank"
                                href="https://wosom.info"
                                sx={{ textDecoration: 'none', color: '#3A61CA', fontSize: { xl: '15px', lg: '12px' }, fontFamily: 'Lexend Deca', fontWeight: '400', fontStyle: 'normal' }}
                            >
                                Help Center
                            </Typography>
                        </Box>

                        <Button sx={{ borderRadius: '8px', backgroundColor: '#f6f6f6', border: '1px solid #a9a9a9', width: { xl: '150px', lg: '130px' }, height: { xl: '40px', lg: '30px' }, margin: 'auto', fontFamily: 'Lexend Deca', fontWeight: '400', fontSize: '15px', color: 'rgba(0, 0, 0, 0.50)' }}>Submit</Button>

                    </ThemeProvider>
                </Box>
            </CardContent>
        </Card>
    )
}
