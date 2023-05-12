import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';




const FetchTrainers = () => {
  
  const trainersInitial = []
  const [trainers, setTrainers] = useState(trainersInitial)
  useEffect(() => {

        console.log("hrllrlr")
          const getNotes = async () => { // API Call
            console.log("hrllrfjfjlr")
              const response = await fetch(`http://localhost:7000/api/adminroutes/getTrainers`, {
                  method: 'GET',
                  mode: "cors",
                  headers: {
                      'Content-Type': 'application/json'
                  }
              });
              const json = await response.json()
              console.log(json);
              setTrainers(json);
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
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Expertise</TableCell>
                            <TableCell align="right">Experience</TableCell>
                            <TableCell align="right">Location</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
          {trainers.map((trainer) => (
            <TableRow
              key={trainer._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {trainer.name}
              </TableCell>
              <TableCell align="right">
                  {trainer.email}
                  </TableCell>
              <TableCell align="right">
                  {trainer.expertise}
                  </TableCell>
              <TableCell align="right">
              {trainer.experience}
                  </TableCell>
              <TableCell align="right">
              {trainer.location}
              </TableCell>
                
              
            </TableRow>
          ))} 
        </TableBody>
                </Table>
            </TableContainer>

        </>
    )
}

export default FetchTrainers