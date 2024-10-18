import React,{useContext, useState} from 'react'
import {Button, TextField, MenuItem, FormControl, Select, InputLabel } from '@mui/material';
import { multiStepContext } from '../StepContex';
import { States } from '../states';


export default function Step2() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    const [error, setErrors] = useState({
      email: '',
      residence: '',
      state: ''
  });

  const validateFields = () => {
      let isValid = true ;
      const newErrors = {email: '', residence:'', state:''};

      if(!userData.email){
        newErrors.email='Email address is required.'
        isValid = false;
      }else if(!/\S+@\S+\.\S+/.test(userData.email)){
        newErrors.email= 'Use valid email address.';
        isValid = false;
      }

      if(!userData.residence){
        newErrors.residence='Residence connot be empty.';
        isValid = false;
      }

      if(!userData.state){
        newErrors.state= 'Select the State.'
        isValid = false;
      }

      setErrors(newErrors);
      return isValid;

    }


    const handleNext = () =>{
      if (validateFields()) {
        setStep(3);
      }
  }

  return (
    <div>
         <div>
            <TextField 
                label="Email"
                value={userData.email || ''} 
                onChange={(e) =>setUserData({...userData, "email" : e.target.value})}  
                margin='normal' 
                variant='outlined' 
                color='secondary'
                error = {!!error.email} 
                helperText={error.email}
                /></div>
        <div>
            <TextField 
                label="Residence" 
                value={userData.residence || ''} 
                onChange={(e) =>setUserData({...userData, "residence" : e.target.value})} 
                margin='normal' 
                variant='outlined' 
                color='secondary'
                error = {!!error.residence} 
                helperText={error.residence}
                /></div>
        <div>
            <FormControl 
                style={{marginBottom:'10px', padding:'10px', maxWidth: '230px', width: '100%'}}
                
              >
                <InputLabel style={{padding:'10px'}}>
                    State
                </InputLabel>

                <Select
                  value={userData.state || ''} 
                  onChange={(e) =>setUserData({...userData, "state" : e.target.value})}
                  label="State"
                  variant='outlined' 
                  margin="normal"
                  color='secondary'
                  error = {!!error.state} 
                  helperText={error.state}
                  
                >
                  {States.map((state, index) => (
                    <MenuItem key={index} value={state}>
                      {state}
                    </MenuItem>
                  ))}
                </Select>
             </FormControl>
          </div>

          <div style={{ marginTop:'20px'}} >
            <Button variant='contained' onClick={() =>setStep(1)}style={{marginRight: "10px"}}>Back</Button>  <span> </span>
            <Button variant='contained' onClick={handleNext} color='secondary' >Next</Button>
          </div>
    </div>
  )
}
