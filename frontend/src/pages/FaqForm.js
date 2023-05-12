// import { useState } from 'react';

// import { TextField,Button,Container,Autocomplete,makeStyles } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: theme.spacing(2),
//     maxWidth: 600,
//     margin: 'auto',
//     marginTop: theme.spacing(4),
//     padding: theme.spacing(2),
//     border: `1px solid ${theme.palette.grey[300]}`,
//     borderRadius: theme.shape.borderRadius,
//   },
//   formControl: {
//     marginBottom: theme.spacing(2),
//   },
// }));

// const tags = [
//   { label: 'General' },
//   { label: 'Membership' },
//   { label: 'Personal Training' },
//   { label: 'Group Classes' },
//   { label: 'Equipment' },
// ];

// const FAQForm = () => {
//   const classes = useStyles();
//   const [question, setQuestion] = useState('');
//   const [answer, setAnswer] = useState('');
//   const [selectedTags, setSelectedTags] = useState([]);

//   const handleQuestionChange = (event) => {
//     setQuestion(event.target.value);
//   };

//   const handleAnswerChange = (event) => {
//     setAnswer(event.target.value);
//   };

//   const handleTagsChange = (event, value) => {
//     setSelectedTags(value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log({ question, answer, tags: selectedTags });
//     // handle form submission here
//   };

//   return (
//     <form className={classes.form} onSubmit={handleSubmit}>
//       <TextField
//         required
//         label="Question"
//         variant="outlined"
//         value={question}
//         onChange={handleQuestionChange}
//         className={classes.formControl}
//       />
//       <TextField
//         required
//         label="Answer"
//         variant="outlined"
//         value={answer}
//         onChange={handleAnswerChange}
//         multiline
//         rows={4}
//         className={classes.formControl}
//       />
//       <Autocomplete
//         multiple
//         id="tags"
//         options={tags}
//         getOptionLabel={(option) => option.label}
//         value={selectedTags}
//         onChange={handleTagsChange}
//         renderInput={(params) => (
//           <TextField
//             {...params}
//             label="Tags"
//             variant="outlined"
//             placeholder="Select tags"
//             className={classes.formControl}
//           />
//         )}
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Submit
//       </Button>
//     </form>
//   );
// };

// export default FAQForm;
