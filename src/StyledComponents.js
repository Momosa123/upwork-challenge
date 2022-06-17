import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField'

import { styled } from "@mui/material/styles";

const PRIMARY_GREEN = "#39B54A";
const SECONDARY_NAVY = "#2B5468";

export const PrimaryButton = styled(Button)(() => ({
  background: PRIMARY_GREEN,
 borderRadius:"50px",
 '&:hover': {
  background: PRIMARY_GREEN,
},
}));

export const CustomTextField = styled(TextField)({
  
  '& label.Mui-focused': {
    color: '#39B54A',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#39B54A',
  },
  '& .MuiOutlinedInput-root': {
    
    '& fieldset': {
      borderColor: '#39B54A',
      
      
      
    },
    '&:hover fieldset': {
      borderColor: '#39B54A',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#39B54A',
    },
  },
});


                                  