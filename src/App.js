import './App.css';
import Typography from '@mui/material/Typography';
import Form from './Components/Form/Form';
function App() {
  return (
    <div className="App">
      <div className='he'>
      <Typography variant='h2' component='div'>Form Validation</Typography>
      </div>
      <div className='fo'>
        <Form/>
      </div>
    </div>
  );
}

export default App;
