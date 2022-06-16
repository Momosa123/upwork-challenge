import React from 'react'
import Typography from '@mui/material/Typography';
import { PrimaryButton, CustomTextField } from "./StyledComponents";
import Container from '@mui/material/Container'
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';

export default function Login() {
  return (
    <div className='Login'>
      <Container
        sx={{
          textAlign:"center",
        display:"flex",
        padding:"20px",
        flexDirection:"column",
        gap:"20px",
        width: 400,
        background: '#fff',
  }}>
        <Typography variant ="h5" >Log in</Typography>
        <CustomTextField 
        label="Username or Email"
        size="small"
         InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
        />
          
      
        <CustomTextField
        label="Password"
        size="small"/>
          
       
        <PrimaryButton size="normal"
        
          variant="contained">Continue with Email
        </PrimaryButton>
      </Container>
    
      
    </div>
  );
}
