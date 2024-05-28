import React, { useState } from 'react'; // Import useState hook
import { Typography, Paper, TextField, InputLabel, Button } from '@mui/material';
import { Link } from 'react-router-dom'

const pages = ['Home', 'Menu', 'Reservation', 'Contact', 'My Account'];

const Homepage = () => {
    const [formData, setFormData] = useState({
      name: '',
      date: '',
      time: '',
      numbOfPeople: '',
      specialRequests: ''
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // You can perform any actions you need here, such as sending the form data to a server
      console.log('Form submitted:', formData);
    };
  
  return (
    <div style={{ position: 'relative', width: '100%', height: 'auto' }}>
      <img 
        src="/image1.jpg" alt="Description of the image" 
        style={{ width: '100%', height: 'auto' }} 
      />
    <div id="services" style={{position: 'absolute', top: '0', display: 'flex', justifyContent: 'center', width: '100%', gap: '1rem'}}>
      <Button 
        sx={{
          backgroundColor: "rgba(217, 217, 217, 0.8)", 
          color: '#FFFFFF', 
          fontWeight: 'bold', 
          width: '12rem', 
          fontSize: '1.5rem',
        }}
        
      >
        DELIVERY
      </Button>
      <Link to="/pickup"> {/* Add Link component with "to" prop */}
        <Button 
          sx={{
            backgroundColor: "rgba(217, 217, 217, 0.8)", 
            color: '#FFFFFF', 
            fontWeight: 'bold', 
            width: '12rem', 
            fontSize: '1.5rem',
          }}          
        >
          PICK-UP
        </Button>
      </Link>
    </div>
      <div 
        style={{
          position: 'absolute',
          top: '5%',
          width: '100%',
          height: '400px',
          backgroundColor: 'rgba(255, 255, 255, 0.6)'
        }}
      >
        <Typography variant="h3" align="left" color="#000000" sx={{ paddingTop: '8rem', paddingLeft: '2rem', fontWeight: 'bold'}}>
          WELCOME TO RELAXING KOALA 
        </Typography>
        <Typography variant="h3" align="left" color="#000000" sx={{ paddingTop: '1rem', paddingLeft: '2rem', fontWeight: 'bold'}}>
          - WHERE FLAVOURS MEET FRIENDS
        </Typography>
      </div>
      <div id="menu">
        <Typography variant="h4" sx={{ fontWeight: 'bold', padding:'2rem'}}>MENU</Typography>
      
        <img 
          src="/Menu.jpg" alt="Description of the image" 
          style={{ width: '100%', height: 'auto' }} 
        />
      </div>
      <Typography variant="h4" sx={{ fontWeight: 'bold', padding:'2rem'}}>BOOK A TABLE</Typography>
      <div id="reservation">
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}} onSubmit={handleSubmit}>
          <TextField 
            label="Name"
            variant="outlined" 
            name="name" 
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.name} 
            onChange={handleChange} 
            sx={{ width: '500px' }} 
            required 
          />

          <TextField 
            label="Date"
            variant="outlined" 
            name="date" 
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.date} 
            onChange={handleChange} 
            sx={{ width: '500px' }} 
            required 
          />

          <TextField 
            label="Time"
            type="time"
            variant="outlined" 
            name="time" 
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.time} 
            onChange={handleChange} 
            sx={{ width: '500px' }} 
            required 
          />

          <TextField 
            label="Number of People"
            variant="outlined" 
            name="numbOfPeople" 
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.numbOfPeople} 
            onChange={handleChange} 
            sx={{ width: '500px' }} 
            required 
          />

          <TextField 
            label="Special Requests"
            variant="outlined" 
            name="specialRequests" 
            InputLabelProps={{
              shrink: true,
            }}
            value={formData.specialRequests} 
            onChange={handleChange} 
            sx={{ width: '500px' }} 
            required 
          />
          <Button 
            type="submit"   
            variant="contained" 
            sx={{ width: '500px', 
            backgroundColor: '#D9D9D9', 
            color: '#000000', 
            fontWeight: 'bold', 
            padding: '1rem'
            , ':hover': { backgroundColor: '#FFFFFF' },
            marginBottom: '1rem'
            }}
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Homepage;
