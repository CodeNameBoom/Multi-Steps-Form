import React, {useContext, useState} from 'react'
import {Button, TextField } from '@mui/material';
import { multiStepContext } from '../StepContex';

export default function Step3() {
    const {setStep,submitData, userData, setUserData} = useContext(multiStepContext);

    const [error, setErrors] = useState({
        company: '',
        interst: '',
        hobbies: ''
    });

    const handleFinalSubmit = () => {
        let isValid = true ;
        const newErrors = {company: '', interst:'', hobbies:''};

        if(!userData.company){
            newErrors.company='Company name is required.'
            isValid = false;
          }
      
          if(!userData.interst){
            newErrors.interst='Please write your intrest.';
            isValid = false;
          }
      
          if(!userData.hobbies){
            newErrors.hobbies= 'hobbies are required .'
            isValid = false;
          }
      
          setErrors(newErrors);
          if(isValid){
                submitData();
          }

          
        }

  return (
    <div>
         <div>
            <TextField 
                label="Company"
                value={userData.company || ''} 
                onChange={(e) =>setUserData({...userData, "company" : e.target.value})} 
                margin='normal' 
                variant='outlined' 
                color='secondary'
                error = {!!error.company} 
                helperText={error.company}
                /></div>
        <div>
            <TextField 
                label="Area Of Interst" 
                value={userData.interst || ''} 
                onChange={(e) =>setUserData({...userData, "interst" : e.target.value})} 
                margin='normal' 
                variant='outlined' 
                olor='secondary'
                error = {!!error.interst} 
                helperText={error.interst}
            /></div>
        <div>
            <TextField 
                label="Hobbies"
                value={userData.hobbies || ''} 
                onChange={(e) =>setUserData({...userData, "hobbies" : e.target.value})}  
                margin='normal' 
                variant='outlined' 
                color='secondary'
                error = {!!error.hobbies} 
                helperText={error.hobbies}
            /></div>
            <div style={{ marginTop:'20px'}} >
                <Button variant='contained' onClick={() =>setStep(2)} style={{marginRight: "10px"}} color='primary'>Back</Button><span> </span>   
                <Button variant='contained' onClick={handleFinalSubmit} style={{ padding:'6px'}} color='secondary'>Submit</Button>
            </div>
            
    </div>
  )
}
