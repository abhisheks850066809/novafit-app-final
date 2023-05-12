import React, {useState, useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Sessions = () => {
  
    const [sessions, setSessions] = useState([])
    useEffect(() => {
        if (localStorage.getItem('token')) {
          console.log("hrllrlr")
            const getSessions = async () => { // API Call
              
                const response = await fetch(`http://localhost:7000/api/sessions/getsessions`, {
                    method: 'GET',
                    mode: "cors",
                    headers: {
                        'Content-Type': 'application/json',
                        "auth-token": localStorage.getItem('token')
                    }
                });
                // const json = await response.json()
                // // console.log("heheh");
                // setSessions(json);

                const json = await response.json()
                setSessions(json);
            }
            getSessions();
        }
    }, []);

    const handleCancel = async (sessionId) => {
        try {
          const response = await fetch(`http://localhost:7000/api/sessions/cancelSession/${sessionId}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token'),
            },
          });
          const json = await response.json();
          console.log(json.message);
          if (json.message === 'Session cancelled successfully') {
            const updatedSessions = sessions.filter(
              (session) => session._id !== sessionId
            );
            setSessions(updatedSessions);
          }
        } catch (error) {
          console.error(error);
        }
      };


    // const handleDelete = (id) => { // Implement delete functionality
    // };
    return (
        <>

            <TableContainer component={Paper}>
                <Table sx={
                        {minWidth: 650}
                    }
                    aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>UserId</TableCell>
                            <TableCell align="right">TrainerId</TableCell>
                            <TableCell align="right">Activity</TableCell>
                            <TableCell align="right">Slot</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">
                                Cancel Session
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
          {sessions.map((session) => (
            <TableRow
              key={session._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {session.userId}
              </TableCell>
              <TableCell align="right">
                  {session.trainerId}
                  </TableCell>
              <TableCell align="right">
                  {session.activity}
                  </TableCell>
              <TableCell align="right">
              {session.slot}
                  </TableCell>
              <TableCell align="right">
              {session.date}
                  </TableCell>
                
                  <TableCell align="right">
                  <button onClick={() => handleCancel(session._id)}>Cancel</button>
                 
                  </TableCell>
            </TableRow>
          ))} 
        </TableBody>
                </Table>
            </TableContainer>

        </>
    );
};

export default Sessions;
