import React, { useContext } from 'react';

//importing all components here
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

import { Stepper, StepLabel, Step } from '@mui/material';
import { multiStepContext } from './StepContex';
import DisplayData from './components/DisplayData';

import './App.css';

function App() {
  
  const { currentStep, finalData} = useContext(multiStepContext);
  function showStep(step) {
    switch(step){
      case 1 :
        return <Step1 />
      case 2 :
        return <Step2 />
      case 3 :
        return <Step3 />
        default:
          return <div>Step not found</div>
    }
    
  }
  return (
    <div className="App">
      <h3 style={{fontSize:'25px'}}>Multi Step Form</h3>
      <div className='center-stepper'>
        <Stepper style={{width: '18%', marginLeft:'40%', padding:'20px'}} activeStep = {currentStep -1} orientation='horizontal'>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
          <Step>
            <StepLabel></StepLabel>
          </Step>
        </Stepper>
      </div>
     {showStep(currentStep)}
     <br></br>
     {finalData.length > 0 ?<DisplayData /> : ''}
    </div>
  );
}

export default App;
