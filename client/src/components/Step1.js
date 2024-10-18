import React, { useContext, useState } from 'react';
import {Button, TextField } from '@mui/material';
import {multiStepContext} from '../StepContex'

export default function Step1() {
    const {setStep, userData, setUserData} = useContext(multiStepContext);

    const [error, setErrors] = useState({
        firstname: '',
        lastname: '',
        contactnumber: ''
    });

    const validateFields = () => {
        let isValid = true;
        const newErrors ={ firstname: '', lastname: '', contactnumber: ''};

        if (!userData.firstname){
            newErrors.firstname = 'First name is required.' ;
            isValid = false ;
        }
        
        if(!userData.lastname) {
            newErrors.lastname = 'Last name is required.';
            isValid = false;
        }

        if(!userData.contactnumber){
            newErrors.contactnumber = 'Contact number is required.';
            isValid = false;
        }else if(!/^\d{10}$/.test(userData.contactnumber)){
            newErrors.contactnumber = 'Contact number must be 10 digits.';
            isValid = false;
        }
        setErrors(newErrors);
        return isValid;
    }
    

    const handleNext = () => {
        if(validateFields()) {
            setStep(2);
        }
    }
  return (
    <div>
        <div>
            <TextField 
                label="First name" 
                value={userData.firstname || ''} 
                onChange={(e) =>setUserData({...userData, "firstname" : e.target.value})}
                margin='normal' 
                variant='outlined' 
                color='secondary'
                error = {!!error.firstname} 
                helperText={error.firstname}
                /></div>
        <div>
            <TextField 
                label="Last name"
                value={userData.lastname || ''} 
                onChange={(e) =>setUserData({...userData, "lastname" : e.target.value})} 
                margin='normal' 
                variant='outlined' 
                color='secondary'
                error = {!!error.lastname} 
                helperText={error.lastname}
                /></div>
        <div>
            <TextField 
                label="Contact number" 
                value={userData.contactnumber || ''} 
                onChange={(e) =>setUserData({...userData, "contactnumber" : e.target.value})} 
                margin='normal' 
                variant='outlined' 
                color='secondary'
                error = {!!error.contactnumber} 
                helperText={error.contactnumber}
                /></div>   
         <div style={{ marginTop:'20px'}} >
            <Button variant='contained' onClick={handleNext} color='secondary'>Next</Button> 
        </div> 
    </div>
  )
}
