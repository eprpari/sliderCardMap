import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


function Admin(){
    return(
        <>
         {/* <Router> */}
             {/* <p>
               <img className="eprLogo"  />
             </p> */}
        <Grid container spacing={1} style = {{fontFamily:"normal"}} >
                <Grid item xs = {2}/>
                <Grid item xs = {8} style ={{margin : "10%"}}>
                    <Card style = {{backgroundColor:"#dde4e6"}}>
                        {/* <Paper> */}
                        <Paper style = {{backgroundColor:"black"}}>
                            <h1 style = {{backgroundColor:"#dde4e6"}} > <center>Welcome to the  EPR Groups Admin Board</center></h1>
                            <Grid container spacing={1} style ={{padding : 40}}>
                            <Grid item xs = {4}/>
                            <Grid item xs = {4} >
                                <Card style = {{backgroundColor:"#dde4e6"}}>
                                    <h3><center>Construction Details</center></h3>
                                    <br/>
                                    <Button  color="primary" align = "right" href = "/admin/add-company">Add Company </Button>
                                    <Button  color="primary" align = "left" href = "/admin/company">List company</Button>
                                    <Button  color="primary" align = "left" href = "/admin/add-project">Add Project</Button>
                                </Card>
                            </Grid>
                            <Grid item xs = {4}/>
                            </Grid>
                            <Grid container spacing={1} style ={{padding : 40}}>
                            <Grid item xs = {2}/>
                            <Grid item xs = {4} >
                                <Card style = {{backgroundColor:"#dde4e6"}}>
                                    <h3><center>Material Details</center></h3>
                                    <br/>
                                    <Button  color="primary" align = "right" href = "/admin/add-mat">Add Mat</Button>
                                    <Button  color="primary" align = "left" href = "/admin/mat">List Mat</Button>
                                </Card>
                            </Grid>
                            <Grid item xs = {2}/>
                            <Grid item xs = {4}>
                                <Card style = {{backgroundColor:"#dde4e6"}}>
                                    <h3><center>Plants Details</center></h3>
                                    <br/>
                                    <Button  color="primary" align = "right" href = "/admin/add-plant">Add Plants</Button>
                                    <Button  color="primary" align = "left" href = "/admin/plants">List Plants</Button>
                                </Card>
                            </Grid>
                            <Grid item xs = {2}/>
                            <Grid item xs = {4}>
                                <Card style = {{backgroundColor:"#dde4e6"}}>
                                    <h3><center>Devices Details</center></h3>
                                    <br/>
                                    <Button  color="primary" align = "right" href = "/admin/add-devices">Add Devices</Button>
                                    <Button   color="primary" align = "left" href = "/admin/devices"> List Devices</Button>
                                </Card>
                            </Grid>
                            <Grid item xs = {2}/>
                            <Grid item xs = {4}>
                                <Card style = {{backgroundColor:"#dde4e6"}}>
                                    <h3><center>Workers Details</center></h3>
                                    <br/>
                                    <Button  color="primary" align = "right" href = "/admin/add-worker">Add Work</Button>
                                    <Button  color="primary" align = "left" href = "/admin/worker">List Work</Button>
                                </Card>
                            </Grid>
                            {/* people said card start */}
                            <Grid item xs = {2}/>
                            <Grid item xs = {4}>
                                <Card style = {{backgroundColor:"#dde4e6"}}>
                                    <h3><center>Peopel Said</center></h3>
                                    <br/>
                                    <Button  color="primary" align = "right" href = "/admin/add-peoplesaid">Add People Said</Button>
                                    <Button  color="primary" align = "left" href = "/admin/peoplesaid">List People said</Button>
                                </Card>
                            </Grid>
                            <Grid item xs = {1}/>
                            </Grid>
                        </Paper>
                    </Card>
                </Grid>
                <Grid item xs = {2}/>
        </Grid>
          <div>
          <Switch>
              
          
       </Switch>
       </div>
          {/* </Router> */}
        </>
    )
}
export default Admin