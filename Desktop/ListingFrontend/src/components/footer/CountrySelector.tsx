import React, { useState } from 'react';
import { Box, Autocomplete, TextField, Paper } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { footerStyles } from './FooterStyles';
import unitedState from '../../assets/images/international-page/us.svg';
import unitedKingdom from '../../assets/images/international-page/gb.svg';
import cyprus from '../../assets/images/international-page/cy.svg';
import pakistan from '../../assets/images/international-page/pk.svg';
import india from '../../assets/images/international-page/in.svg';

interface Country {
  label: string;
  code: string;
  logo: string;
}

const countries: Country[] = [
  { code: 'US', label: 'United States', logo: unitedState },
  { code: 'GB', label: 'United Kingdom', logo: unitedKingdom },
  { code: 'CY', label: 'Cyprus', logo: cyprus },
  { code: 'PK', label: 'Pakistan', logo: pakistan },
  { code: 'IN', label: 'India', logo: india },
];

const CountrySelector: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country | undefined>(countries[0]);

  return (
    <Box sx={footerStyles.footerCountrySelector}>
      <Autocomplete
        id="country-select"
        value={selectedCountry}
        options={countries}
        getOptionLabel={(option) => `${option.code} - ${option.label}`}
        popupIcon={<KeyboardArrowDownIcon />}
        disableClearable
        onChange={(_, newValue) => setSelectedCountry(newValue as Country)}
        isOptionEqualToValue={(option, value) => option.code === value?.code}
        PaperComponent={(props) => (
          <Paper {...props} sx={{ ...footerStyles.selectCountryDropdownStyles, top: '-265px', background: 'white' }} />
        )}
        renderOption={(props, option) => (
          <Box component="li" sx={{ "& > img": { mr: 2, flexShrink: 0 } }} {...props}>
            <Box
              component="img"
              src={option.logo}
              alt={`flag ${option.code}`}
              sx={{ width: '30px' }}
            />
            {`${option.code} - ${option.label}`}
          </Box>
        )}
        renderInput={(params) => (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {selectedCountry && (
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
                autoComplete: 'new-password',
                sx: footerStyles.selectCountryInnerTextfield,
              }}
              sx={footerStyles.selectCountryTextfieldStyle}
            />
          </Box>
        )}
      />
    </Box>
  );
};

export default CountrySelector;
