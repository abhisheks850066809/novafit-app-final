import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const FetchTrainees = () => {
  
  const traineesInitial = []
  const [trainees, setTrainees] = useState(traineesInitial)
  useEffect(() => {

        console.log("hrllrlr")
          const getNotes = async () => { // API Call
            console.log("hrllrfjfjlr")
              const response = await fetch(`http://localhost:7000/api/adminroutes/getTrainees`, {
                  method: 'GET',
                  mode: "cors",
                  headers: {
                      'Content-Type': 'application/json'
                  }
              });
              const json = await response.json()
              console.log(json);
              setTrainees(json);
          }
          getNotes();
      
  }, [])

  return (
    <>
     
     <TableContainer component={Paper}>
                <Table sx={
                        {minWidth: 650}
                    }
                    aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center" className='col-4'>Email</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
          {trainees.map((trainee) => (
            <TableRow
              key={trainee._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {trainee.name}
              </TableCell>
              <TableCell align="center" className='col-4'>
                  {trainee.email}
                  </TableCell>                
              
            </TableRow>
          ))} 
        </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default FetchTrainees