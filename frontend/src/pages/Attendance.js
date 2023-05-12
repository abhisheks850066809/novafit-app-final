import { useState } from 'react';
import { TextField, Button, Container } from '@mui/material';

const AttendanceForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [hours, setHours] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:7000/api/attendance/addattendance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, date, hours })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // do something with the response data, if desired
      })
      .catch(error => {
        console.error(error);
        // handle the error, if desired
      });
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          variant="outlined"
          margin="normal"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Date"
          variant="outlined"
          margin="normal"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          fullWidth
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Hours"
          variant="outlined"
          margin="normal"
          type="number"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          fullWidth
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AttendanceForm;
