import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2);
    setBmi(bmi);
    if (bmi < 18.5) {
      setMessage("Underweight");
    } else if (bmi >= 18.5 && bmi < 25) {
      setMessage("Healthy Weight");
    } else if (bmi >= 25 && bmi < 30) {
      setMessage("Overweight");
    } else if (bmi >= 30) {
      setMessage("Obese");
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10}>
        <Typography variant="h4" align="center" gutterBottom>
          BMI Calculator
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Height (cm)"
              variant="outlined"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Weight (kg)"
              variant="outlined"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={calculateBMI}
              fullWidth
            >
              Calculate
            </Button>
          </Grid>
          {bmi !== null && (
            <Grid item xs={12}>
              <Typography variant="h5" align="center">
                Your BMI is {bmi}
              </Typography>
              <Typography variant="h6">
              {message}
            </Typography>
            </Grid>
          )}
        </Grid>
      </Box>
    </Container>
  );
};

export default BMICalculator;
