import React, {useEffect, useState} from 'react'
import { Container, Paper, Grid, 
  // Button 
} from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
// import {  useHistory} from "react-router-dom";
import { makeStyles, } from '@material-ui/core/styles';
// import Paper from '@material-ui/core/Paper';
import Zoom from '@material-ui/core/Zoom';
import { useStateValue } from '../context';
// import { useStateValue } from "../StateContext/";


const useStyles = makeStyles(() => ({
    boxWrapper: {
        width:450, 
        height:640, 
        marginBottom:10, 
        // paddingLeft:10,
        // paddingRight:10,
        borderTopLeftRadius:15,
        borderTopRightRadius:15,
        
    },
    paper: {
        height:500,
        backgroundColor:'white', 
        marginTop:80, 
        alignItems:'center',
        borderTopLeftRadius:10, 
        borderTopRightRadius:10
    },
    boxTitle:{
      backgroundColor:'#F6B402',
      borderTopLeftRadius:10, 
      borderTopRightRadius:10
    },
    boxIcon:{
      height:100,
      width:100, 
      backgroundColor:'green',
      margin:'auto',
      borderRadius:50, 
      // justifyContent:'center', 
      // alignItems:'center' , 
      // alignText:'center'
    }
}));



const SuccessPage =({paymentID})=>{
  const [{ formValues }, dispatch] = useStateValue();

  const classes = useStyles()
  const [checked, setChecked] = useState(false);
  useEffect(()=>{
    handleChange()
  },[])

  const handleChange = () => {
    setChecked(true);
  };
 
  // const history = useHistory()
  // const onClick = () =>{
  //   dispatch({ type: 'emptyFormValue'})
  //   history.push('/')
  // }
  
  return(
     <Zoom in={checked} style={{ transitionDelay: checked ? '300ms' : '0ms' }}>
        <Container className={classes.boxWrapper}>
          <Paper className={classes.paper}>
            

            <Grid container  justifyContent='center' className={classes.boxTitle}>

          <p style={{fontWeight:'bold', fontSize:25, color:'white'}} >Confirmation</p>
            </Grid>

            <div style={{height:40}} />
              

            <Grid  item className={classes.boxIcon}>
              <CheckIcon style={{fontSize:60, color:'white', textAlign:'center', marginLeft:'20%', marginTop:'20%'}}/>

            </Grid>
            
            <p style={{textAlign:'center', fontSize:25}}>Your payment to: <br /> <span style={{fontWeight:'bold'}}>{formValues.receiverName}, </span> <br /> passed successfully, thank you for reaching out! You can order another payment link and pay out :)</p>
            {/* <p style={{textAlign:'center', fontSize:18}}></p> */}
            <Grid container item justify='center' style={{marginTop:30}}>
              {/* <Button
                variant="contained"
                style={{ backgroundColor:'#F1F8FF', color:'black', width:'40%',height:50}}
                type="button"
                onClick={onClick}
            >            
                
                 <a href={`http://localhost:3000`} style={{textDecoration:'none', color:'black'}}>Okay</a>
            
            </Button> */}

            
        </Grid>
        
          </Paper>

        </Container>
    </Zoom>
  )
}

export default SuccessPage