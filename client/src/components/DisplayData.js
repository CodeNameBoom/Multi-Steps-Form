import React, { useContext } from 'react';
import { TableContainer, TableHead,TableBody, TableCell, TableRow, Table } from '@mui/material';

import { multiStepContext } from '../StepContex';




export default function DisplayData() {
    const { finalData } = useContext(multiStepContext);

  return (
    <div>
        <TableContainer style={{display:'flex', justifyContent:'center'}}>
          <Table border= "1" style={{width:'70%', justifyContent:'center'}} size="small" aria-label="caption table">
            <TableHead>
              <TableRow style={{backgroundColor:'burlywood', color:'aliceblue'}}>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Contact Number</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Reasidence</TableCell>
                <TableCell>State</TableCell>
                <TableCell>Company</TableCell>
                <TableCell>Area Of Interst</TableCell>
                <TableCell>Hobbies</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {finalData.map(data =>(
                <TableRow>
                <TableCell>{data.firstname}</TableCell>
                <TableCell>{data.lastname}</TableCell>
                <TableCell>{data.contactnumber}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.residence}</TableCell>
                <TableCell>{data.state}</TableCell>
                <TableCell>{data.company}</TableCell>
                <TableCell>{data.interst}</TableCell>
                <TableCell>{data.hobbies}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}
