import { Box, Button, Container, Grid, Stack } from "@mui/material";
import React, { useState } from 'react';

export default function () {

  let [counter,setCounter] = useState(0);


  return (
    <>
   
      <Box sx={{m:5}} >
        <Container >
          <Grid container justifyContent= "center" >
            <Stack direction={"column"} spacing={2}>
              <h1>Counter App</h1>
              <h2>{counter}</h2>
              <Stack direction={'row'} spacing={2}>
                <Button variant="contained" onClick={()=>setCounter(--counter)} disabled={counter === 0} >-</Button>
                <Button variant="contained" onClick={()=>setCounter(++counter)} >+</Button>
              </Stack>
            </Stack>
          </Grid>
        </Container>
      </Box>
    
    </>
  )
}


   


