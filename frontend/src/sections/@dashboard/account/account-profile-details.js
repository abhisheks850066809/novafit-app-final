import { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid,
} from '@mui/material';

const gender = [
  {
    value: 'male',
    label: 'Male',
  },
  {
    value: 'female',

    label: 'Female',
  },
];
const states = [
  {
    value: 'alabama',
    label: 'Alabama',
  },
  {
    value: 'new-york',
    label: 'New York',
  },
  {
    value: 'delhi',
    label: 'delhi',
  },
  {
    value: 'los-angeles',
    label: 'Los Angeles',
  },
];

export const AccountProfileDetails = () => {
  const [values, setValues] = useState({
    // firstName: 'XYZ',
    // lastName: '',
    Name: 'XYZ',
    email: 'xyz@nova.com',
    phone: '',
    state: 'delhi',
    country: 'India',
    height: 170,
    weight: 65,
    temperature: 37,
    pulseRate: 78,
    bloodPressure: '110/68',
  });

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="The information can be edited" title="Profile" />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -1.5 }}>
            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  helperText="Please specify the first name"
                  label=" name"
                  name="XYZ"
                  onChange={handleChange}
                  required
                  value={values.firstName}
                />
              </Grid>
              {/* <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Last name"
                  name="lastName"
                  onChange={handleChange}
                  required
                  value={values.lastName}
                /> */}
              {/* </Grid> */}
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Select Gender"
                  name="gender"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.gender}
                >
                  {gender.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Country"
                  name="country"
                  onChange={handleChange}
                  required
                  value={values.country}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Select State"
                  name="state"
                  onChange={handleChange}
                  required
                  select
                  SelectProps={{ native: true }}
                  value={values.state}
                >
                  <Grid xs={12} md={6}>
                    <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="Height"
                      name="cm"
                      onChange={handleChange}
                      required
                      value={values.cm}
                    />
                  </Grid>
                  {states.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Grid>
            </Grid>
            <Divider />

            <Grid container spacing={3}>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Height (cm)"
                  name="height"
                  onChange={handleChange}
                  required
                  value={values.height}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Weight (kg)"
                  name="weight"
                  onChange={handleChange}
                  required
                  value={values.weight}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Body temperature (C)"
                  name="body_temperature"
                  onChange={handleChange}
                  required
                  value={values.temperature}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Pulse Rate"
                  name="pulse_rate"
                  onChange={handleChange}
                  required
                  value={values.pulseRate}
                />
              </Grid>
              <Grid xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Blood Pressure (mmHg)"
                  name="blood_pressure"
                  onChange={handleChange}
                  required
                  value={values.bloodPressure}
                />
              </Grid>
            </Grid>
          </Box>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained">Save details</Button>
        </CardActions>
      </Card>
    </form>
  );
};
