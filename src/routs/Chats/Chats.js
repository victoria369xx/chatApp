import React from 'react';
import {ChatList} from '..//..//components';
import {Container, Grid, Card} from '@mui/material';






export default function Chats ({children}) {
    return (
      <Card style={{marginTop:"5rem", paddingBottom:"5rem", paddingLeft:"2rem"}}>
        <Container maxWidth="md" style={{marginTop:"2rem"}}>
        <Grid item container xs={12} spacing={2}>
            <Grid item xs={4}>
              <ChatList/>
            </Grid>
            <Grid item xs={6}>
            {children}
            </Grid>
        </Grid>
      </Container>
      </Card>
    )
}

