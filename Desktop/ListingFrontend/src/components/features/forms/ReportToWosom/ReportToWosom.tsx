import React, { useState, useRef } from 'react';
import {
    Box, TextField, MenuItem, Button, Typography
} from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import reportToWosomStyles from './ReportToWosomStyles';  

const currencies = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' },
];

const ReportToWosom = () => {
    const classes = reportToWosomStyles;
    const hiddenFileInput = useRef<HTMLInputElement | null>(null);
    const [media, setMedia] = useState<File | null>(null);

    const handleClick = () => {
        hiddenFileInput.current?.click();
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setMedia(event.target.files[0]);
        }
    };

    return (
        <Box sx={classes.container}>
            <Box sx={classes.formWrapper}>
                <Typography sx={classes.header}>Share your thoughts on Wosom!</Typography>
                <Typography sx={classes.subHeader}>Your feedback matters.<br />Help us fix any glitches and make your experience top-notch</Typography>
                <TextField 
                    sx={classes.formField} 
                    label="Your Name" 
                    required 
                    size="small" 
                />
                <TextField 
                    sx={classes.formField} 
                    type='text'
                    label="Email Address" 
                    required 
                    size="small" 
                    InputProps={{ disableUnderline: true }}
                />
                <TextField 
                    sx={classes.formField} 
                    label="Subject" 
                    size="small" 
                />
                <TextField 
                    sx={classes.formField} 
                    select 
                    label="Please Select" 
                    required 
                    size="small">
                    {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                <TextField 
                    sx={classes.multilineField} 
                    label="Type here" 
                    multiline 
                    rows={4} 
                    size="small" 
                />
                <Box sx={classes.fileUploadBox} onClick={handleClick}>
                    <Typography>{media ? media.name : 'Add a screenshot or video (recommended)'}</Typography>
                    <AttachFileIcon />
                    <input
                        type="file"
                        onChange={handleImageChange}
                        ref={hiddenFileInput}
                        style={{ display: 'none' }}
                    />
                </Box>
                <Box sx={classes.helpText}>
                    <Typography>Need Help solving a specific issue? <Typography component="a" href="https://wosom.info" target="_blank">Help Center</Typography></Typography>
                </Box>
                <Button sx={classes.submitButton}>
                    Submit
                </Button>
            </Box>
        </Box>
    );
}

export default ReportToWosom;
