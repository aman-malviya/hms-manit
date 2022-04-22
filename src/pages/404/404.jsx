import React from 'react'
import { Button, Container, Paper, Typography } from '@mui/material';
import useStyles from './styles';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const classes = useStyles();
    const history = useHistory();

    return (
        <>
            <Container className={classes.container} sx={{ py: 4 }} maxWidth="m">
                <div style={{'width':'100%', 'display':'flex', 'flexDirection':'column', 'alignItems':'center'}}>
                    <Typography component="h1" variant="h4" color="primary">
                        Page Not found!
                    </Typography>   
                    <div className={classes.imageContainer}>
                        <h1 style={{fontSize:'5rem'}}>404</h1>
                    </div>

                    <Button 
                        variant='outlined'
                        onClick={() => history.goBack()}
                    >
                        Go Back
                    </Button>
                </div>
            </Container>
        </>
    )
}

export default NotFound;
