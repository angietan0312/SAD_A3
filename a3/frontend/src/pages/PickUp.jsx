import React from 'react';
import { Typography, Paper, Button } from '@mui/material';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';

const styles = {
    container: {
      padding: '2rem',
      display: 'flex',
      justifyContent: 'center'
    },
    mainPaper: {
      position: 'relative', // Add relative positioning to the main Paper
      width: '40%',
      backgroundColor: '#325636',
      padding: '2rem', // Add padding to the main Paper
      display: 'flex',
      flexDirection: 'column'
    },
    text: {
        fontWeight: 'bold',
        color: '#FFFFFF',
        textAlign: 'left',
        margin: '0 0.3rem'
    },
    icon: {
        color: '#FFFFFF',
    },
    storeDetails: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '1rem'
    },
    btn: {
        fontWeight: 'bold',
        width: '40%',
        marginTop: '0.5rem'
    }
  };

const PickupPage = () => {
  return (
    <div style={styles.container}>
      <Paper elevation={3} sx={styles.mainPaper}>
        <Typography variant='h5' style={styles.text}>Store details</Typography>
        <div style={styles.storeDetails}>
            <StorefrontOutlinedIcon style={styles.icon} />
            <Typography style={styles.text}>Relaxing Koala</Typography>
        </div>
            <Typography style={styles.text}>Shop 2, Glenferrie Road, 3122, VIC</Typography>
            <Button style={styles.btn} variant='contained'>PICKUP NOW</Button>
      </Paper>
    </div>
  );
};

export default PickupPage;
