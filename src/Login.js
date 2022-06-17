import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Typography from '@mui/material/Typography';
import { PrimaryButton, CustomTextField } from "./StyledComponents";
import Container from '@mui/material/Container'
import InputAdornment from '@mui/material/InputAdornment';
import PersonIcon from '@mui/icons-material/Person';
import FormControl from '@mui/material/FormControl';

export default function Login({setLoggin}) {

  useEffect(
    ()=>{
      setLoggin(false)
    },[]
  )
  return (
    <div className='Login'>
      <Container
        sx={{
        borderRadius:"5px",
        textAlign:"center",
        padding:"30px",
        width: 400,
        background: '#fff',
      }}>

        <Typography component="div" color="#777" variant ="h5"
         sx={{
          marginBottom:"20px"
        }}  >
          Log in
        </Typography>

        <FormControl
        sx={{
        maxWidth:"80%",
        margin:"0 auto",
        display:"flex",      
        flexDirection:"column",
        gap:"20px",        
      }}>
        
          <CustomTextField label="Username or Email" size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
          />
            
          <CustomTextField label="Password" size="small"/>

            <PrimaryButton size="normal" variant="contained"
            onClick={()=>setLoggin(true)}>
            Continue with Email
            </PrimaryButton>

        </FormControl>

      </Container>
    
      
    </div>
  );
}
