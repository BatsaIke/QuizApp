import { Box, Typography } from '@mui/material';
import { categoriesSessionTwoStyles } from './CategoriesSessionTwoStyles';
import SideTopCross from '../../../resuableComponents/sideCross/SideTopCross';

const categories = [
  'Bridal Wear', 'Beauty', 'Transport', 'Catering', 'Childcare services',
  'Cake & Dessert', 'Entertainment', 'Grooms Wear', 'Favor & Gifts', 'Invitation',
  'Honeymoon', 'Health & Fitness', 'Rental Services', 'Accessories', 'Photographer & Videographer',
  'Photobooth Rental', 'Venues', 'Wedding Directory', 'Other services', 'Insurance',
  'Destination wedding', 'Planning & Coordination', 'Wedding Portal', 'Mobile Bar Services', 'Lighting & Production'
];

const CategoriesSessionTwo = () => {
  const classes = categoriesSessionTwoStyles;

  const renderCategoryBoxes = () => {
    return categories.map((category, index) => (
      <Box key={index} sx={classes.categoryBox}>
        <Typography sx={classes.categoryText}>
          {category}
        </Typography>
      </Box>
    ));
  };

  const renderRows = () => {
    const rows = [];
    for (let i = 0; i < categories.length; i += 5) {
      rows.push(
        <Box key={i} sx={classes.row}>
          {renderCategoryBoxes().slice(i, i + 5)}
        </Box>
      );
    }
    return rows;
  };

  return (
    <Box sx={classes.container}>
        <SideTopCross/>
        <Box sx={classes.categoryContainer}>
      {renderRows()}
    </Box>
    </Box>
  );
};

export default CategoriesSessionTwo;
